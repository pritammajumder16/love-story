import { motion } from "framer-motion";
import { Calendar, Plus, Edit, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { RomanticButton } from "@/components/ui/romantic-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { demoEntriesData, personalInfo } from "@/data/demoData";
import type { DiaryEntry } from "@/data/demoData";

const diaryFormSchema = z.object({
  date: z.string().min(1, "Date is required"),
  title: z.string().min(1, "Title is required"),
  content: z.string().min(10, "Content must be at least 10 characters"),
});

type DiaryFormData = z.infer<typeof diaryFormSchema>;

export default function Diary() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<DiaryEntry | null>(null);
  const [entries, setEntries] = useState<DiaryEntry[]>(demoEntriesData);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<DiaryFormData>({
    resolver: zodResolver(diaryFormSchema),
    defaultValues: {
      date: "",
      title: "",
      content: "",
    },
  });

  const onSubmit = (data: DiaryFormData) => {
    setIsLoading(true);
    
    if (editingEntry) {
      // Update existing entry
      setEntries(prev => prev.map(entry => 
        entry.id === editingEntry.id 
          ? { ...entry, ...data, id: editingEntry.id }
          : entry
      ));
      setEditingEntry(null);
      toast({
        title: "Entry Updated! 💕",
        description: "Your diary entry has been updated.",
      });
    } else {
      // Add new entry
      const newEntry: DiaryEntry = {
        id: Date.now().toString(),
        ...data,
        image: `/images/diary${entries.length + 1}.jpg`
      };
      setEntries(prev => [...prev, newEntry].sort((a, b) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      ));
      toast({
        title: "Entry Added! 💕", 
        description: "Your diary entry has been saved to our love story.",
      });
    }
    
    setIsDialogOpen(false);
    form.reset();
    setIsLoading(false);
  };

  const openAddDialog = () => {
    setEditingEntry(null);
    form.reset({
      date: format(new Date(), "yyyy-MM-dd"),
      title: "",
      content: "",
    });
    setIsDialogOpen(true);
  };

  const openEditDialog = (entry: DiaryEntry) => {
    setEditingEntry(entry);
    form.reset({
      date: entry.date,
      title: entry.title,
      content: entry.content,
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
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="font-romantic text-5xl md:text-6xl font-bold text-romantic-purple mb-6">
                Our Love Story Diary
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every day since {personalInfo.meetingDate}, has been a new chapter in our beautiful love story. 
                Here's our journey, day by day.
              </p>
              <div className="w-24 h-1 bg-romantic-pink mx-auto mt-6"></div>
            </div>
          </ScrollReveal>

          {/* Add New Entry Button */}
          <ScrollReveal delay={0.2}>
            <div className="text-center mb-12">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <RomanticButton 
                    onClick={openAddDialog}
                    variant="romantic"
                    testId="button-add-entry"
                  >
                    <Plus className="mr-2 h-5 w-5" />
                    Add New Entry
                  </RomanticButton>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="font-romantic text-2xl text-romantic-purple">
                      {editingEntry ? "Edit Entry" : "Add New Entry"}
                    </DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} data-testid="input-date" />
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
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter a title for this day..." {...field} data-testid="input-title" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Story</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell our love story for this day..."
                                className="min-h-[120px]"
                                {...field}
                                data-testid="textarea-content"
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
                          data-testid="button-cancel"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="bg-romantic-pink hover:bg-deep-purple"
                          data-testid="button-save-entry"
                        >
                          <Heart className="mr-2 h-4 w-4" />
                          {editingEntry ? "Update Entry" : "Save Entry"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-romantic-pink mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading our love story...</p>
              </div>
            ) : entries.length === 0 ? (
              <ScrollReveal>
                <Card className="text-center py-12">
                  <CardContent>
                    <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No entries yet</h3>
                    <p className="text-gray-500">Start writing your love story by adding your first entry!</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ) : (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {entries.map((entry, index) => (
                  <ScrollReveal key={entry.id} delay={index * 0.1}>
                    <motion.div
                      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="md:w-1/3">
                        <img
                          src={entry.image || `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`}
                          alt={`Memory from ${entry.title}`}
                          className="rounded-2xl shadow-lg w-full h-64 object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400";
                          }}
                        />
                      </div>
                      <div className={`md:w-2/3 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                        <Card className="love-card shadow-xl">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="bg-romantic-pink text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                                  {index + 1}
                                </div>
                                <div>
                                  <h3 className="font-romantic text-2xl font-semibold text-romantic-purple">
                                    {entry.title}
                                  </h3>
                                  <p className="text-romantic-pink font-medium">
                                    {format(parseISO(entry.date), "MMMM do, yyyy")}
                                  </p>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => openEditDialog(entry)}
                                className="text-romantic-purple hover:text-romantic-pink"
                                data-testid={`button-edit-${entry.id}`}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 leading-relaxed">{entry.content}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
