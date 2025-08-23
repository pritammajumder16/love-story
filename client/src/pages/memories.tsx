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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { format, parseISO } from "date-fns";
import { pageTransition, staggerContainer } from "@/lib/animations";
import { demoMemoriesData } from "@/data/demoData";
import type { Memory } from "@/data/demoData";

const memoryFormSchema = z.object({
  date: z.string().min(1, "Date is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  image: z.string().min(1, "Please provide an image URL or path"),
});

type MemoryFormData = z.infer<typeof memoryFormSchema>;

export default function Memories() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [memories, setMemories] = useState<Memory[]>(demoMemoriesData);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<MemoryFormData>({
    resolver: zodResolver(memoryFormSchema),
    defaultValues: {
      date: "",
      title: "",
      description: "",
      image: "",
    },
  });

  const onSubmit = (data: MemoryFormData) => {
    setIsLoading(true);
    
    const newMemory: Memory = {
      id: Date.now().toString(),
      ...data,
      type: 'image', // Default to image for now
    };
    
    setMemories(prev => [newMemory, ...prev]);
    setIsDialogOpen(false);
    form.reset();
    setIsLoading(false);
    
    toast({
      title: "Memory Saved! 💕",
      description: "Your beautiful memory has been added to our collection.",
    });
  };

  const handleDeleteMemory = (id: string) => {
    setMemories(prev => prev.filter(memory => memory.id !== id));
    toast({
      title: "Memory Deleted",
      description: "The memory has been removed from our collection.",
    });
  };

  const openAddDialog = () => {
    form.reset({
      date: format(new Date(), "yyyy-MM-dd"),
      title: "",
      description: "",
      image: "",
    });
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
      <section className="py-20 romantic-gradient">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="font-romantic text-5xl md:text-6xl font-bold text-white mb-6">
                Our Precious Memories
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Every moment we've shared is a treasure. This is our digital scrapbook where we'll 
                keep all our beautiful memories forever.
              </p>
              <div className="w-24 h-1 bg-white/50 mx-auto mt-6"></div>
            </div>
          </ScrollReveal>

          {/* Memory Upload Section */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-2xl mx-auto mb-16">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <div className="romantic-glass rounded-3xl p-8 text-center cursor-pointer hover:bg-white/20 transition-all duration-300">
                    <Upload className="mx-auto h-12 w-12 text-white mb-4" />
                    <h3 className="font-romantic text-2xl font-semibold text-white mb-4">Add New Memory</h3>
                    <p className="text-white/80 mb-6">Add photos or videos from our special moments</p>
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
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image URL or Path</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="/images/memory1.jpg or https://..." 
                                {...field} 
                                data-testid="input-image-url"
                              />
                            </FormControl>
                            <p className="text-sm text-gray-500">
                              💡 Place your images in client/public/images/ and use /images/filename.jpg
                            </p>
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
                          disabled={isLoading}
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
      <section className="py-20 dreamy-gradient">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-romantic-pink mx-auto"></div>
              <p className="mt-4 text-romantic-dark">Loading our precious memories...</p>
            </div>
          ) : memories.length === 0 ? (
            <ScrollReveal>
              <Card className="max-w-md mx-auto text-center py-12 romantic-glass">
                <CardContent>
                  <Heart className="mx-auto h-12 w-12 text-romantic-pink mb-4" />
                  <h3 className="text-xl font-semibold text-romantic-dark mb-2">No memories yet</h3>
                  <p className="text-romantic-purple">Start building your collection by adding your first memory!</p>
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
                    <div className="romantic-glass rounded-3xl p-6 relative group">
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="rounded-2xl w-full h-48 object-cover mb-4"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400";
                        }}
                      />
                      
                      {/* Delete button */}
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => handleDeleteMemory(memory.id)}
                        data-testid={`button-delete-${memory.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>

                      <div className="text-center">
                        <h4 className="font-romantic text-xl font-semibold text-romantic-dark mb-2">
                          {memory.title}
                        </h4>
                        <p className="text-romantic-purple font-medium mb-2">
                          {format(parseISO(memory.date), "MMMM do, yyyy")}
                        </p>
                        {memory.description && (
                          <p className="text-romantic-dark/80 text-sm">{memory.description}</p>
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
                  <div className="romantic-glass rounded-3xl p-6 border-2 border-dashed border-romantic-pink/30 flex flex-col items-center justify-center h-64">
                    <Heart className="h-12 w-12 text-romantic-pink/70 mb-4" />
                    <p className="text-romantic-purple text-center">Add more beautiful memories to our collection</p>
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