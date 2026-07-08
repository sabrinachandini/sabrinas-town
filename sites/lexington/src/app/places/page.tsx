import { redirect } from "next/navigation";

// Places information is now part of the Before You Go visitor guide.
export default function PlacesPage() {
  redirect("/visit");
}
