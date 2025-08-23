import { motion } from "framer-motion";
import { Upload, Calendar, Trash2, Heart, Image as ImageIcon, Video } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { RomanticButton } from "@/components/ui/romantic-button";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { format, parseISO } from "date-fns";
import { pageTransition, staggerContainer } from "@/lib/animations";
import type { Memory } from "@shared/schema";

const memoryFormSchema = z.object({
  date: z.string().min(1, "Date is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  file: z.instanceof(File).refine(
    (file) => file.size <= 50 * 1024 * 1024,
    "File must be less than 50MB"
  ).refine(
    (file) => {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'video/mp4', 'video/mov', 'video/avi'];
      return allowedTypes.includes(file.type);
    },
    "Only image and video files are allowed"
  ),
});

type MemoryFormData = z.infer<typeof memoryFormSchema>;

export default function Memories() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: memories = [], isLoading } = useQuery<Memory[]>({
    queryKey: ["/api/memories"],
  });

  const form = useForm<MemoryFormData>({
    resolver: zodResolver(memoryFormSchema),
    defaultValues: {
      date: "",
      title: "",
      description: "",
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: MemoryFormData) => {
      const formData = new FormData();
      formData.append("date", data.date);
      formData.append("title", data.title);
      formData.append("description", data.description || "");
      formData.append("file", data.file);

      const res = await fetch("/api/memories", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload memory");
      }

      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/memories"] });
      setIsDialogOpen(false);
      setSelectedFile(null);
      form.reset();
      toast({
        title: "Memory Saved! 💕",
        description: "Your beautiful memory has been added to our collection.",
      });
    },
    onError: () => {
      toast({
        title: "Oops!",
        description: "There was an error saving your memory. Please try again.",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await apiRequest("DELETE", `/api/memories/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/memories"] });
      toast({
        title: "Memory Deleted",
        description: "The memory has been removed from our collection.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete memory. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: MemoryFormData) => {
    if (selectedFile) {
      createMutation.mutate({ ...data, file: selectedFile });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      form.setValue("file", file);
    }
  };

  const openAddDialog = () => {
    form.reset({
      date: format(new Date(), "yyyy-MM-dd"),
      title: "",
      description: "",
    });
    setSelectedFile(null);
    setIsDialogOpen(true);
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-24 pb-12"
    >
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-romantic-dark via-deep-purple to-romantic-purple">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="font-romantic text-5xl md:text-6xl font-bold text-white mb-6">
                Our Precious Memories
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Every moment we've shared is a treasure. This is our digital scrapbook where we'll 
                keep all our beautiful memories forever.
              </p>
              <div className="w-24 h-1 bg-romantic-pink mx-auto mt-6"></div>
            </div>
          </ScrollReveal>

          {/* Memory Upload Section */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-2xl mx-auto mb-16">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <div className="glass-effect rounded-3xl p-8 text-center cursor-pointer hover:bg-white/20 transition-all duration-300">
                    <Upload className="mx-auto h-12 w-12 text-white mb-4" />
                    <h3 className="font-romantic text-2xl font-semibold text-white mb-4">Add New Memory</h3>
                    <p className="text-white/80 mb-6">Upload photos or videos from our special moments</p>
                    <RomanticButton 
                      onClick={openAddDialog}
                      variant="dreamy"
                      testId="button-add-memory"
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      Choose Memory
                    </RomanticButton>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="font-romantic text-2xl text-romantic-purple">
                      Add New Memory
                    </DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="file"
                        render={() => (
                          <FormItem>
                            <FormLabel>Choose File</FormLabel>
                            <FormControl>
                              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <input
                                  type="file"
                                  accept="image/*,video/*"
                                  onChange={handleFileChange}
                                  className="hidden"
                                  id="file-upload"
                                  data-testid="input-file"
                                />
                                <label htmlFor="file-upload" className="cursor-pointer">
                                  {selectedFile ? (
                                    <div className="flex items-center justify-center">
                                      {selectedFile.type.startsWith('image/') ? (
                                        <ImageIcon className="h-8 w-8 text-romantic-pink mr-2" />
                                      ) : (
                                        <Video className="h-8 w-8 text-romantic-pink mr-2" />
                                      )}
                                      <span className="text-romantic-purple font-medium">
                                        {selectedFile.name}
                                      </span>
                                    </div>
                                  ) : (
                                    <div>
                                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                                      <p className="text-gray-600">Click to choose a file</p>
                                      <p className="text-sm text-gray-500 mt-2">
                                        Images and videos up to 50MB
                                      </p>
                                    </div>
                                  )}
                                </label>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} data-testid="input-memory-date" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Memory Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Give this memory a beautiful title..." {...field} data-testid="input-memory-title" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell the story behind this memory..."
                                className="min-h-[100px]"
                                {...field}
                                data-testid="textarea-memory-description"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex gap-4 justify-end">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsDialogOpen(false)}
                          data-testid="button-cancel-memory"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={createMutation.isPending || !selectedFile}
                          className="bg-romantic-pink hover:bg-deep-purple"
                          data-testid="button-save-memory"
                        >
                          <Heart className="mr-2 h-4 w-4" />
                          Save Memory
                        </Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Memory Gallery */}
      <section className="py-20 bg-gradient-to-br from-romantic-dark via-deep-purple to-romantic-purple">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-romantic-pink mx-auto"></div>
              <p className="mt-4 text-white/80">Loading our precious memories...</p>
            </div>
          ) : memories.length === 0 ? (
            <ScrollReveal>
              <Card className="max-w-md mx-auto text-center py-12 bg-white/10 border-white/20">
                <CardContent>
                  <Heart className="mx-auto h-12 w-12 text-white/60 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No memories yet</h3>
                  <p className="text-white/80">Start building your collection by adding your first memory!</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-3 gap-8"
            >
              {memories.map((memory, index) => (
                <ScrollReveal key={memory.id} delay={index * 0.1}>
                  <motion.div
                    className="love-card"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="glass-effect rounded-3xl p-6 relative group">
                      {memory.mediaType === 'image' ? (
                        <img
                          src={memory.mediaUrl!}
                          alt={memory.title}
                          className="rounded-2xl w-full h-48 object-cover mb-4"
                        />
                      ) : (
                        <video
                          src={memory.mediaUrl!}
                          className="rounded-2xl w-full h-48 object-cover mb-4"
                          controls
                          preload="metadata"
                        />
                      )}
                      
                      {/* Delete button */}
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => deleteMutation.mutate(memory.id)}
                        disabled={deleteMutation.isPending}
                        data-testid={`button-delete-${memory.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>

                      <div className="text-center">
                        <h4 className="font-romantic text-xl font-semibold text-white mb-2">
                          {memory.title}
                        </h4>
                        <p className="text-romantic-pink font-medium mb-2">
                          {format(parseISO(memory.date), "MMMM do, yyyy")}
                        </p>
                        {memory.description && (
                          <p className="text-white/80 text-sm">{memory.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}

              {/* Add More Placeholder */}
              <ScrollReveal delay={(memories.length + 1) * 0.1}>
                <motion.div
                  className="love-card cursor-pointer"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={openAddDialog}
                >
                  <div className="glass-effect rounded-3xl p-6 border-2 border-dashed border-white/30 flex flex-col items-center justify-center h-64">
                    <Heart className="h-12 w-12 text-white/50 mb-4" />
                    <p className="text-white/70 text-center">Add more beautiful memories to our collection</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
