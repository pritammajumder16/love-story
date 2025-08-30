import { motion } from "framer-motion";
import { Heart, Plus, Edit } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { RomanticButton } from "@/components/ui/romantic-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { useState } from "react";
import { pageTransition, staggerContainer } from "@/lib/animations";
import { personalInfo } from "@/data/demoData";

const activityFormSchema = z.object({
  title: z.string().min(1, "Activity title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type ActivityFormData = z.infer<typeof activityFormSchema>;

type Activity = {
  id: string;
  title: string;
  description: string;
};

// Sample initial activities (can be replaced with MongoDB fetch)
const initialActivities: Activity[] = [
  {
    id: "1",
    title: "Stargazing Night",
    description:
      "Find a quiet spot, lay out a blanket, and gaze at the stars together. Make wishes on shooting stars and share dreams under the night sky.",
  },
  {
    id: "2",
    title: "Cooking Class from Paro",
    description:
      "Take cooking classes from her and try new recipes at home. Create a dish you both love and enjoy the meal with candlelight.",
  },
  {
    id: "3",
    title: "Sunset Picnic",
    description:
      "Pack a picnic with your favorite snacks and watch the sunset at a scenic spot. Bring a cozy blanket and some wine for extra romance.",
  },
  {
    id: "4",
    title: "Rainy Day Tea",
    description:
      "When it rains, sit together by the window with cups of tea, listen to raindrops, and watch her glow in the soft light.",
  },
  {
    id: "5",
    title: "Recreate First Date",
    description:
      "Relive the magic of your first date with Paro. Visit the same place, order the same food, and reminisce about how it all began.",
  },
  {
    id: "6",
    title: "Rooftop Sleepover",
    description:
      "Spend a night on the rooftop under the open sky. Snuggle in blankets, talk until sunrise, and fall asleep in each other’s arms.",
  },
  {
    id: "7",
    title: "Rain Dance",
    description:
      "Dance together in the rain with laughter and music in your hearts. Let it be spontaneous and carefree.",
  },
  {
    id: "8",
    title: "Antarctica Adventure",
    description:
      "One day, travel to Antarctica, wrap in warm jackets, and lay in her arms while staring at the endless snow and sky.",
  },
  {
    id: "9",
    title: "Kiss Marathon",
    description:
      "Dedicate an entire day to kissing her in every possible way — forehead, cheeks, lips, hands — until you lose count.",
  },
  {
    id: "10",
    title: "Home Spa Day",
    description:
      "Run a home spa — massages, scented candles, facemasks, and soft music. Pamper each other the whole day.",
  },
  {
    id: "11",
    title: "Library Date",
    description:
      "Visit a cozy library or bookstore. Pick books for each other and spend quiet hours reading side by side.",
  },
  {
    id: "12",
    title: "Write Love Letters",
    description:
      "Sit together and write letters to each other about your dreams, then exchange and read them aloud.",
  },
  {
    id: "13",
    title: "Road Trip",
    description:
      "Plan a spontaneous road trip. Blast your favorite songs, stop at roadside stalls, and enjoy freedom together.",
  },
  {
    id: "14",
    title: "Candlelight Dinner at Home",
    description:
      "Turn your living room into a restaurant. Cook or order food, light candles, and make it your private date night.",
  },
  {
    id: "15",
    title: "Hot Air Balloon Ride",
    description:
      "Take her on a hot air balloon ride. Hold hands as you float above the world and watch the sunrise together.",
  },
  {
    id: "16",
    title: "Make a Couple Playlist",
    description:
      "Create a playlist with songs that remind you of her. Listen together and dance in your room.",
  },
  {
    id: "17",
    title: "Take a Dance Class",
    description:
      "Learn a dance style together — salsa, waltz, or even freestyle. Laugh at your mistakes and enjoy the closeness.",
  },
  {
    id: "18",
    title: "Karaoke Night",
    description:
      "Sing duets, laugh at your off-key notes, and dedicate cheesy songs to each other.",
  },
  {
    id: "19",
    title: "Beach Walk",
    description:
      "Hold hands and walk barefoot on the beach at sunset. Collect seashells and write your names in the sand.",
  },
  {
    id: "20",
    title: "Puzzle Building",
    description:
      "Spend hours solving a giant puzzle together. Celebrate every small win with a kiss.",
  },
  {
    id: "21",
    title: "Bake Together",
    description:
      "Try baking cookies or a cake. Play with flour, feed each other, and lick the frosting.",
  },
  {
    id: "22",
    title: "Photo Album Creation",
    description:
      "Create a physical scrapbook of your pictures, tickets, and notes. Decorate it with doodles and stickers.",
  },
  {
    id: "23",
    title: "Camping Night",
    description:
      "Pitch a tent in your backyard or a forest. Make a bonfire, roast marshmallows, and tell stories.",
  },
  {
    id: "24",
    title: "Watch Childhood Cartoons",
    description:
      "Spend a whole day watching your favorite childhood cartoons together. Laugh like kids again.",
  },
  {
    id: "25",
    title: "Long Train Ride",
    description:
      "Take a scenic train ride. Share food, sit by the window, and daydream about your future.",
  },
  {
    id: "26",
    title: "Theme Park Date",
    description:
      "Go on rollercoasters, eat cotton candy, and win her a teddy bear.",
  },
  {
    id: "27",
    title: "Painting Day",
    description:
      "Buy canvases and paint something for each other. Even messy art will become a memory.",
  },
  {
    id: "28",
    title: "Couple’s Bucket List",
    description:
      "Sit down and make a list of 50 things you want to do together. Start ticking them off one by one.",
  },
  {
    id: "29",
    title: "Night Drive",
    description:
      "Go for a midnight drive with music and open windows. Stop somewhere quiet and talk under the stars.",
  },
  {
    id: "30",
    title: "Festival Together",
    description:
      "Celebrate Holi, Diwali, or Christmas together. Cook, decorate, and exchange gifts in your own style.",
  },
  {
    id: "31",
    title: "Surprise Notes",
    description:
      "Hide love notes in her bag, books, or pillows. Watch her smile when she finds them.",
  },
  {
    id: "32",
    title: "Make a Fort",
    description:
      "Build a pillow fort, get inside with snacks, and watch movies all night.",
  },
  {
    id: "33",
    title: "Star Map",
    description:
      "Buy a star map of the night you met. Hang it on the wall and stargaze at home.",
  },
  {
    id: "34",
    title: "Take Polaroids",
    description:
      "Capture candid moments with a Polaroid camera. Stick them on your walls.",
  },
  {
    id: "35",
    title: "Bike Ride",
    description:
      "Ride a bike together through empty streets in the morning. Stop for chai at a roadside stall.",
  },
  {
    id: "36",
    title: "Couple Gaming Night",
    description:
      "Play video games or board games. Winner gets kisses as rewards.",
  },
  {
    id: "37",
    title: "Temple Visit",
    description:
      "Visit a temple, pray together, and then share prasad sitting on the steps.",
  },
  {
    id: "38",
    title: "Moonlight Walk",
    description:
      "Walk late at night under the moonlight. Talk about your dreams and fears.",
  },
  {
    id: "39",
    title: "Cook Her Favorite Dish",
    description:
      "Surprise her by cooking her favorite dish all by yourself. Serve it with love.",
  },
  {
    id: "40",
    title: "Take a Workshop",
    description:
      "Attend a pottery, painting, or cooking workshop together. Create something you’ll keep forever.",
  },
  {
    id: "41",
    title: "Movie Marathon",
    description:
      "Pick a series — Harry Potter, LOTR, or romcoms — and watch them all with popcorn.",
  },
  {
    id: "42",
    title: "Love Jar",
    description:
      "Fill a jar with notes of reasons you love her. Let her pick one every day.",
  },
  {
    id: "43",
    title: "Dress Up Day",
    description: "Wear matching outfits or swap each other’s style for fun.",
  },
  {
    id: "44",
    title: "Mini Vacation",
    description:
      "Plan a quick getaway to the hills, beach, or nearby town. Make it your secret escape.",
  },
  {
    id: "45",
    title: "Bonfire Night",
    description: "Sit by a bonfire, sing songs, and cuddle in the warmth.",
  },
  {
    id: "46",
    title: "Sky Lanterns",
    description:
      "Light sky lanterns with your wishes and release them together.",
  },
  {
    id: "47",
    title: "Photo Shoot",
    description:
      "Do a fun photoshoot of each other in random places. Capture silly and romantic poses.",
  },
  {
    id: "48",
    title: "Go Hiking",
    description:
      "Pick a trail, climb together, and enjoy the view with packed snacks.",
  },
  {
    id: "49",
    title: "Make Handmade Gifts",
    description:
      "Create handmade gifts like bracelets, keychains, or paintings for each other.",
  },
  {
    id: "50",
    title: "Couple Playlist 2.0",
    description:
      "Record voice notes of love and mix them into a playlist. Keep it as your secret album.",
  },
  {
    id: "51",
    title: "Couple Photography Walk",
    description:
      "Take a camera and walk around the city, clicking random photos of each other in candid moments.",
  },
  {
    id: "52",
    title: "DIY Pizza Night",
    description:
      "Buy toppings and make your own pizzas together, competing on whose creation tastes better.",
  },
  {
    id: "53",
    title: "Watch Sunrise Together",
    description:
      "Wake up super early, go to a rooftop or a beach, and watch the sunrise hand in hand.",
  },
  {
    id: "54",
    title: "Paint Each Other",
    description:
      "Do portraits of each other, even if they turn out silly. Hang them on the wall.",
  },
  {
    id: "55",
    title: "Zoo or Aquarium Date",
    description:
      "Spend a day exploring animals or sea life, taking cute selfies with them in the background.",
  },
  {
    id: "56",
    title: "Go Ice Skating",
    description:
      "Hold hands and skate together. If you fall, fall together and laugh it off.",
  },
  {
    id: "57",
    title: "Night of Board Games",
    description:
      "Pick old-school games like Ludo, Carrom, or Scrabble and play all night.",
  },
  {
    id: "58",
    title: "Love Coupons",
    description:
      "Make a set of love coupons she can redeem anytime—like free hugs, breakfast in bed, or a massage.",
  },
  {
    id: "59",
    title: "Travel Without Destination",
    description:
      "Take a bus or train without deciding where to go. Get off somewhere random and explore.",
  },
  {
    id: "60",
    title: "Hidden Treasure Hunt",
    description:
      "Create a treasure hunt at home with clues leading her to surprises or gifts.",
  },
  {
    id: "61",
    title: "Go Karting",
    description: "Race each other in go-karts and let her win (or not!).",
  },
  {
    id: "62",
    title: "Picnic at a Park",
    description:
      "Pack sandwiches, fruit, and juice. Lie down on the grass together.",
  },
  {
    id: "63",
    title: "Build LEGO Together",
    description:
      "Get a big LEGO set and build something silly like your dream house.",
  },
  {
    id: "64",
    title: "DIY Perfume",
    description: "Mix essential oils and create your own couple fragrance.",
  },
  {
    id: "65",
    title: "Write a Song",
    description: "Try writing lyrics about each other and hum a tune together.",
  },
  {
    id: "66",
    title: "Visit a Museum",
    description:
      "Spend a day at an art or history museum, making funny commentary on everything.",
  },
  {
    id: "67",
    title: "Astrology Night",
    description:
      "Read each other’s horoscopes, laugh at predictions, and plan your future anyway.",
  },
  {
    id: "68",
    title: "Mimic Each Other",
    description:
      "Spend a whole hour imitating each other’s habits and gestures for laughs.",
  },
  {
    id: "69",
    title: "Teach Each Other Skills",
    description:
      "You teach her something you know, and she teaches you something she knows.",
  },
];

export default function Activities() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 5;
  const { toast } = useToast();

  const form = useForm<ActivityFormData>({
    resolver: zodResolver(activityFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (data: ActivityFormData) => {
    setIsLoading(true);

    if (editingActivity) {
      // Update existing activity
      setActivities((prev) =>
        prev.map((activity) =>
          activity.id === editingActivity.id
            ? { ...activity, ...data, id: editingActivity.id }
            : activity
        )
      );
      setEditingActivity(null);
      toast({
        title: "Activity Updated! 💕",
        description: "Your romantic activity has been updated.",
      });
    } else {
      // Add new activity
      const newActivity: Activity = {
        id: Date.now().toString(),
        ...data,
      };
      setActivities((prev) => [...prev, newActivity]);
      toast({
        title: "Activity Added! 💕",
        description: "A new romantic idea has been added to our love story.",
      });
    }

    setIsDialogOpen(false);
    form.reset();
    setIsLoading(false);
    setCurrentPage(1); // Reset to first page after adding/updating
  };

  const openAddDialog = () => {
    setEditingActivity(null);
    form.reset({
      title: "",
      description: "",
    });
    setIsDialogOpen(true);
  };

  const openEditDialog = (activity: Activity) => {
    setEditingActivity(activity);
    form.reset({
      title: activity.title,
      description: activity.description,
    });
    setIsDialogOpen(true);
  };

  // Pagination logic
  const totalPages = Math.ceil(activities.length / activitiesPerPage);
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-16"
    >
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="font-romantic text-5xl md:text-6xl font-bold text-romantic-purple mb-6">
                Our Romantic Adventures
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Since {personalInfo.meetingDate}, every moment with you, Paro,
                is an adventure. Here are ideas to make our love story even more
                unforgettable.
              </p>
              <div className="w-24 h-1 bg-romantic-pink mx-auto mt-6"></div>
            </div>
          </ScrollReveal>

          {/* Add New Activity Button */}
          <ScrollReveal delay={0.2}>
            <div className="text-center mb-12">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <RomanticButton
                    onClick={openAddDialog}
                    variant="romantic"
                    testId="button-add-activity"
                  >
                    <Plus className="mr-2 h-5 w-5" />
                    Add New Activity
                  </RomanticButton>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="font-romantic text-2xl text-romantic-purple">
                      {editingActivity ? "Edit Activity" : "Add New Activity"}
                    </DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Activity Title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter a romantic activity idea..."
                                {...field}
                                data-testid="input-title"
                              />
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
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe this romantic adventure..."
                                className="min-h-[120px]"
                                {...field}
                                data-testid="textarea-description"
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
                          data-testid="button-save-activity"
                        >
                          <Heart className="mr-2 h-4 w-4" />
                          {editingActivity
                            ? "Update Activity"
                            : "Save Activity"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
          </ScrollReveal>

          {/* Activities List */}
          <div className="max-w-3xl mx-auto">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-romantic-pink mx-auto"></div>
                <p className="mt-4 text-gray-600">
                  Loading our romantic adventures...
                </p>
              </div>
            ) : activities.length === 0 ? (
              <ScrollReveal>
                <Card className="text-center py-12">
                  <CardContent>
                    <Heart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No activities yet
                    </h3>
                    <p className="text-gray-500">
                      Start planning your next adventure with Paro by adding an
                      activity!
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ) : (
              <>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {currentActivities.map((activity, index) => (
                    <ScrollReveal key={activity.id} delay={index * 0.1}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="love-card shadow-xl p-6">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-romantic text-2xl font-semibold text-romantic-purple">
                                  {activity.title}
                                </h3>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => openEditDialog(activity)}
                                className="text-romantic-purple hover:text-romantic-pink"
                                data-testid={`button-edit-${activity.id}`}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                              {activity.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </motion.div>

                {/* Pagination Controls */}
                <ScrollReveal delay={0.3}>
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <Button
                      variant="outline"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="text-romantic-purple hover:bg-romantic-pink hover:text-white"
                      data-testid="button-prev-page"
                    >
                      Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => handlePageChange(page)}
                          className={
                            currentPage === page
                              ? "bg-romantic-pink text-white"
                              : "text-romantic-purple hover:bg-romantic-pink hover:text-white"
                          }
                          data-testid={`button-page-${page}`}
                        >
                          {page}
                        </Button>
                      )
                    )}
                    <Button
                      variant="outline"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="text-romantic-purple hover:bg-romantic-pink hover:text-white"
                      data-testid="button-next-page"
                    >
                      Next
                    </Button>
                  </div>
                </ScrollReveal>
              </>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
