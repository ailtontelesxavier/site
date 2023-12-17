import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import { signUpNewsletter } from "@/actions/newsletter";

async function NewletterForm() {
  
  return (
    <form action={signUpNewsletter}>
      <div className="flex w-full max-w-sm items-center space-x-2 m-6">
        <Label htmlFor="email" className="hidden">Email</Label>
        <Input id="email" type="email" name="email" placeholder="Email" required />
        <Button type="submit" size={"default"}>
          Assinar
        </Button>
      </div>
    </form>
  );
}
export default NewletterForm;
