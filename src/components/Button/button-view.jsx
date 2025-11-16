import Button from "./Button";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  XmarkIcon,
  SearchIcon,
  BellIcon,
  AtIcon,
  BookmarkIcon,
  PlusIcon,
  MinusIcon,
} from "../../assets/icons";

export default function ButtonView() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="elevated">Elevated</Button>
          <Button variant="pressed">Pressed</Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button loading>Loading</Button>
          <Button variant="outline" loading>
            Loading
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" IconLeft={ArrowLeftIcon}>
            Previous
          </Button>
          <Button variant="default" IconRight={ArrowRightIcon}>
            Next
          </Button>
          <Button variant="secondary" IconLeft={ArrowLeftIcon}>
            Back
          </Button>
          <Button variant="ghost" IconRight={ArrowRightIcon}>
            Forward
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            className="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-800 dark:text-white"
            IconLeft={CheckIcon}
          >
            Success
          </Button>
          <Button variant="destructive" IconLeft={XmarkIcon}>
            Delete
          </Button>
          <Button variant="outline" IconLeft={CheckIcon}>
            Approve
          </Button>
          <Button variant="secondary" loading IconLeft={XmarkIcon}>
            Reject
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button variant="outline" size="sm" IconLeft={SearchIcon} />
          <Button variant="outline" size="sm" IconLeft={BellIcon} />
          <Button variant="outline" size="sm" IconLeft={AtIcon} />
          <Button variant="outline" size="sm" IconLeft={BookmarkIcon} />
          <Button variant="outline" size="sm" IconLeft={PlusIcon} />
          <Button variant="outline" size="sm" IconLeft={MinusIcon}/>
        </div>
      </div>
    </div>
  );
}
