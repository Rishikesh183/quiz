
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { quizzes } from "@/data/quizzes";
import { useUser } from "@clerk/clerk-react";
const Quizzes = () => {
  const user = useUser()
  console.log(user)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Available Quizzes</h1>
      <p>{!user.isSignedIn && 
       <h2 className="text-xl font-sans mb-4">Note : Sign-up to see your dashboard performance</h2>}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <Link to={`/quiz/${quiz.id}`} key={quiz.id}>
            <Card className="quiz-card h-full hover:translate-y-[-4px] transition-transform">
              {quiz.image && (
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={quiz.image} 
                    alt={quiz.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className="inline-block px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary mb-2">
                  {quiz.category}
                </div>
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {quiz.questions.length} questions
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-muted-foreground">Take this quiz</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
