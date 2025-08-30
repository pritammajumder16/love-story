import { motion } from "framer-motion";
import {
  Upload,
  Trash2,
  Heart,
  ChevronLeft,
  ChevronRight,
  X,
  Download,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { RomanticButton } from "@/components/ui/romantic-button";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { pageTransition, staggerContainer } from "@/lib/animations";
import { demoMemoriesData, Memory } from "@/data/demoData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 20, rotate: 2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  hover: {
    y: -10,
    scale: 1.03,
    rotate: -1,
    transition: { type: "spring", stiffness: 300 },
  },
};

// Schema for form validation
const memoryFormSchema = z.object({
  date: z.string().min(1, "Date is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  images: z.string().min(1, "Please provide at least one image URL or path"),
});

type MemoryFormData = z.infer<typeof memoryFormSchema>;

export default function Memories() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [memories, setMemories] = useState<Memory[]>(demoMemoriesData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentImageIndices, setCurrentImageIndices] = useState<
    Record<string, number>
  >({});
  const [selectedMemory, setSelectedMemory] = useState<{
    id: string;
    images: string[];
    currentIndex: number;
  } | null>(null);
  const [imageLoadingProgress, setImageLoadingProgress] = useState<
    Record<string, number>
  >({});
  const { toast } = useToast();

  const form = useForm<MemoryFormData>({
    resolver: zodResolver(memoryFormSchema),
    defaultValues: {
      date: "",
      title: "",
      description: "",
      images: "",
    },
  });

  const onSubmit = (data: MemoryFormData) => {
    setIsLoading(true);

    const newMemory: Memory = {
      id: Date.now().toString(),
      ...data,
      images: data.images.split(",").map((img) => img.trim()),
      type: "image",
    };

    setMemories((prev) => [newMemory, ...prev]);
    setIsDialogOpen(false);
    form.reset();
    setIsLoading(false);

    toast({
      title: "Memory Saved! 💕",
      description: "Your beautiful memory has been added to our collection.",
      className: "bg-romantic-pink text-white border-romantic-purple",
    });
  };

  const handleDeleteMemory = (id: string) => {
    setMemories((prev) => prev.filter((memory) => memory.id !== id));
    setCurrentImageIndices((prev) => {
      const newIndices = { ...prev };
      delete newIndices[id];
      return newIndices;
    });
    setImageLoadingProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[id];
      return newProgress;
    });
    toast({
      title: "Memory Deleted",
      description: "The memory has been removed from our collection.",
      className: "bg-romantic-dark text-white border-romantic-pink",
    });
  };

  const openAddDialog = () => {
    form.reset({
      date: format(new Date(), "yyyy-MM-dd"),
      title: "",
      description: "",
      images: "",
    });
    setIsDialogOpen(true);
  };

  const handleNextImage = (memoryId: string, imagesLength: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [memoryId]: ((prev[memoryId] || 0) + 1) % imagesLength,
    }));
  };

  const handlePrevImage = (memoryId: string, imagesLength: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [memoryId]: ((prev[memoryId] || 0) - 1 + imagesLength) % imagesLength,
    }));
  };

  const handleImageClick = (memoryId: string, imageIndex: number) => {
    const memory = memories.find((m) => m.id === memoryId);
    if (memory) {
      setSelectedMemory({
        id: memoryId,
        images: memory.images,
        currentIndex: imageIndex,
      });
    }
  };

  const handleClosePopup = () => {
    setSelectedMemory(null);
  };

  const handleDownloadImage = () => {
    if (selectedMemory) {
      const link = document.createElement("a");
      link.href = selectedMemory.images[selectedMemory.currentIndex];
      link.download =
        selectedMemory.images[selectedMemory.currentIndex].split("/").pop() ||
        "memory-image.jpeg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleNextModalImage = () => {
    if (selectedMemory) {
      setSelectedMemory({
        ...selectedMemory,
        currentIndex:
          (selectedMemory.currentIndex + 1) % selectedMemory.images.length,
      });
    }
  };

  const handlePrevModalImage = () => {
    if (selectedMemory) {
      setSelectedMemory({
        ...selectedMemory,
        currentIndex:
          (selectedMemory.currentIndex - 1 + selectedMemory.images.length) %
          selectedMemory.images.length,
      });
    }
  };

  // Simulate image loading progress
  useEffect(() => {
    const updateProgress = (memoryId: string) => {
      setImageLoadingProgress((prev) => ({
        ...prev,
        [memoryId]: prev[memoryId] ? Math.min(prev[memoryId] + 10, 100) : 10,
      }));
    };

    memories.forEach((memory) => {
      if (!imageLoadingProgress[memory.id]) {
        const interval = setInterval(() => {
          updateProgress(memory.id);
        }, 200);
        return () => clearInterval(interval);
      }
    });
  }, [memories, imageLoadingProgress]);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-20 bg-background"
    >
      {/* Header */}
      <section className="py-24 romantic-header-gradient relative overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-16 relative">
              <motion.div
                className="inline-flex items-center mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart
                  className="text-romantic-pink h-10 w-10 mr-4 animate-pulse-heart"
                  fill="currentColor"
                />
                <h1 className="font-romantic text-6xl md:text-7xl font-bold text-white">
                  Our Precious Memories
                </h1>
              </motion.div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                A love-filled scrapbook of our cherished moments, forever etched
                in our hearts.
              </p>
              <div className="w-32 h-1 bg-romantic-pink/50 mx-auto mt-8 rounded-full relative">
                <Heart
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 h-6 w-6 text-romantic-pink animate-pulse-heart"
                  fill="currentColor"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Memory Upload Section */}
          <ScrollReveal delay={0.3}>
            <div className="max-w-2xl mx-auto mb-16">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <motion.div
                    className="romantic-glass rounded-3xl p-10 text-center cursor-pointer hover:bg-soft-pink/20 transition-all duration-300 shadow-romantic"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Upload className="mx-auto h-14 w-14 text-black mb-4 animate-pulse-heart" />
                    <h3 className="font-romantic text-3xl font-semibold text-black mb-4">
                      Add a New Memory
                    </h3>
                    <p className="text-black/90 mb-6 text-lg">
                      Capture our love with photos or videos of our special
                      moments.
                    </p>
                    <RomanticButton
                      onClick={openAddDialog}
                      variant="dreamy"
                      testId="button-add-memory"
                      className="bg-romantic-pink hover:bg-romantic-purple transition-all duration-300"
                    >
                      <Heart className="mr-2 h-6 w-6 animate-pulse-heart" />
                      Add Our Memory
                    </RomanticButton>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-romantic-dark/95 romantic-glass p-8 rounded-3xl">
                  <DialogHeader>
                    <DialogTitle className="font-romantic text-3xl text-romantic-gold relative">
                      <Heart
                        className="inline h-6 w-6 text-romantic-pink mr-2 animate-pulse-heart"
                        fill="currentColor"
                      />
                      Add New Memory
                    </DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <FormField
                        control={form.control}
                        name="images"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-romantic-gold">
                              Image URLs or Paths
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="/images/memory1.jpg,/images/memory2.jpg"
                                className="bg-white/10 border-romantic-pink/30 text-white placeholder-romantic-purple/50"
                                {...field}
                                data-testid="input-image-urls"
                              />
                            </FormControl>
                            <p className="text-sm text-romantic-gold/70">
                              💖 Place your images in client/public/images/ and
                              use /images/filename.jpg. Separate multiple URLs
                              with commas.
                            </p>
                            <FormMessage className="text-romantic-pink" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-romantic-gold">
                              Date
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                className="bg-white/10 border-romantic-pink/30 text-white"
                                {...field}
                                data-testid="input-memory-date"
                              />
                            </FormControl>
                            <FormMessage className="text-romantic-pink" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-romantic-gold">
                              Memory Title
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="A title that sparks our love..."
                                className="bg-white/10 border-romantic-pink/30 text-white placeholder-romantic-purple/50"
                                {...field}
                                data-testid="input-memory-title"
                              />
                            </FormControl>
                            <FormMessage className="text-romantic-pink" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-romantic-gold">
                              Description (Optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="The story of our hearts..."
                                className="min-h-[120px] bg-white/10 border-romantic-pink/30 text-white placeholder-romantic-purple/50"
                                {...field}
                                data-testid="textarea-memory-description"
                              />
                            </FormControl>
                            <FormMessage className="text-romantic-pink" />
                          </FormItem>
                        )}
                      />
                      <div className="flex gap-4 justify-end">
                        <Button
                          type="button"
                          variant="outline"
                          className="border-romantic-pink text-romantic-gold hover:bg-romantic-pink/20"
                          onClick={() => setIsDialogOpen(false)}
                          data-testid="button-cancel-memory"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="bg-romantic-pink hover:bg-romantic-purple text-white"
                          data-testid="button-save-memory"
                        >
                          <Heart className="mr-2 h-5 w-5 animate-pulse-heart" />
                          Save Our Memory
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
      <section className="py-24 romantic-gallery-gradient">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="text-center py-16">
              <motion.div
                className="animate-spin rounded-full h-14 w-14 border-b-2 border-romantic-pink mx-auto"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
              <p className="mt-4 text-romantic-dark text-lg">
                Unveiling our cherished memories...
              </p>
            </div>
          ) : memories.length === 0 ? (
            <ScrollReveal>
              <Card className="max-w-md mx-auto text-center py-12 romantic-glass shadow-romantic">
                <CardContent>
                  <Heart
                    className="mx-auto h-14 w-14 text-romantic-pink mb-4 animate-pulse-heart"
                    fill="currentColor"
                  />
                  <h3 className="text-2xl font-romantic font-semibold text-romantic-dark mb-2">
                    No Memories Yet
                  </h3>
                  <p className="text-romantic-purple text-lg">
                    Begin our love story by adding your first memory!
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-3 gap-10"
            >
              {memories.map((memory, index) => (
                <ScrollReveal key={memory.id} delay={index * 0.15}>
                  <motion.div
                    className="love-card relative"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <div className="romantic-glass rounded-3xl p-8 shadow-romantic relative group overflow-hidden">
                      {/* Heart overlay on hover */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ pointerEvents: "none" }}
                      >
                        <Heart
                          className="h-24 w-24 text-romantic-pink/20 animate-pulse-heart"
                          fill="currentColor"
                        />
                      </motion.div>
                      {/* Carousel */}
                      <div className="relative flex items-center justify-center">
                        <LazyLoadImage
                          src={
                            memory.images[currentImageIndices[memory.id] || 0]
                          }
                          alt={memory.title}
                          className="rounded-2xl w-full h-56 object-cover mb-6 cursor-pointer border-2 border-romantic-pink/20"
                          effect="blur"
                          placeholderSrc="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                          onClick={() =>
                            handleImageClick(
                              memory.id,
                              currentImageIndices[memory.id] || 0
                            )
                          }
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400";
                          }}
                          data-testid={`image-${memory.id}`}
                          afterLoad={() => {
                            setImageLoadingProgress((prev) => ({
                              ...prev,
                              [memory.id]: 100,
                            }));
                          }}
                        />
                        {imageLoadingProgress[memory.id] !== undefined &&
                          imageLoadingProgress[memory.id] < 100 && (
                            <div className="absolute bottom-0 w-full h-2 bg-romantic-pink/20 rounded-b-2xl overflow-hidden">
                              <div
                                className="h-full bg-romantic-pink transition-all duration-300"
                                style={{
                                  width: `${
                                    imageLoadingProgress[memory.id] || 0
                                  }%`,
                                }}
                              />
                            </div>
                          )}
                        {memory.images.length > 1 && (
                          <>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-romantic-dark/50 hover:bg-romantic-purple/70 text-white rounded-full w-12 h-12"
                              onClick={() =>
                                handlePrevImage(memory.id, memory.images.length)
                              }
                              data-testid={`button-prev-image-${memory.id}`}
                            >
                              <ChevronLeft className="h-7 w-7" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-romantic-dark/50 hover:bg-romantic-purple/70 text-white rounded-full w-12 h-12"
                              onClick={() =>
                                handleNextImage(memory.id, memory.images.length)
                              }
                              data-testid={`button-next-image-${memory.id}`}
                            >
                              <ChevronRight className="h-7 w-7" />
                            </Button>
                          </>
                        )}
                      </div>

                      {/* Delete button */}
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-romantic-dark/80 hover:bg-red-500/90"
                        onClick={() => handleDeleteMemory(memory.id)}
                        data-testid={`button-delete-${memory.id}`}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>

                      <div className="text-center">
                        <h4 className="font-romantic text-2xl font-semibold text-romantic-dark mb-3">
                          {memory.title}
                        </h4>
                        <p className="text-romantic-purple font-medium mb-3 text-lg">
                          {format(parseISO(memory.date), "MMMM do, yyyy")}
                        </p>
                        {memory.description && (
                          <p className="text-romantic-dark/80 text-sm leading-relaxed">
                            {memory.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}

              {/* Add More Placeholder */}
              <ScrollReveal delay={(memories.length + 1) * 0.15}>
                <motion.div
                  className="love-card cursor-pointer"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  onClick={openAddDialog}
                >
                  <div className="romantic-glass rounded-3xl p-8 border-2 border-dashed border-romantic-pink/40 flex flex-col items-center justify-center h-64 shadow-romantic bg-soft-pink/10">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Heart
                        className="h-16 w-16 text-romantic-pink mb-4 animate-pulse-heart"
                        fill="currentColor"
                      />
                    </motion.div>
                    <p className="text-romantic-purple text-lg text-center font-romantic">
                      Add more chapters to our love story
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Popup Overlay */}
      <Dialog open={!!selectedMemory} onOpenChange={handleClosePopup}>
        <DialogContent className="max-w-4xl romantic-glass p-8 bg-romantic-dark/95 rounded-3xl">
          <div className="relative">
            <div className="flex justify-end gap-3 mb-6">
              <Button
                variant="ghost"
                size="icon"
                className="bg-romantic-pink hover:bg-romantic-purple text-white rounded-full shadow-romantic"
                onClick={handleDownloadImage}
                data-testid="button-download-image"
              >
                <Download className="h-7 w-7" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-romantic-dark/70 hover:bg-romantic-purple/70 text-white rounded-full shadow-romantic"
                onClick={handleClosePopup}
                data-testid="button-close-image-popup"
              >
                <X className="h-7 w-7" />
              </Button>
            </div>
            {selectedMemory && (
              <div className="relative romantic-frame p-4 rounded-2xl">
                <LazyLoadImage
                  src={selectedMemory.images[selectedMemory.currentIndex]}
                  alt="Selected memory"
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                  effect="blur"
                  placeholderSrc="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800";
                  }}
                  data-testid="popup-image"
                />
                {selectedMemory.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-romantic-dark/50 hover:bg-romantic-purple/70 text-white rounded-full w-12 h-12"
                      onClick={handlePrevModalImage}
                      data-testid="button-prev-modal-image"
                    >
                      <ChevronLeft className="h-7 w-7" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-romantic-dark/50 hover:bg-romantic-purple/70 text-white rounded-full w-12 h-12"
                      onClick={handleNextModalImage}
                      data-testid="button-next-modal-image"
                    >
                      <ChevronRight className="h-7 w-7" />
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
