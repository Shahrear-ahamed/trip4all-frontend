import {
  ErrorAlert,
  InfoAlert,
  LoadingAlert,
  SuccessAlert,
  WarnAlert,
} from "@/components/ui/myAlerts";

export default function ServicePage() {
  return (
    <div>
      <LoadingAlert />
      <InfoAlert message="Info" />
      <WarnAlert message="Warning" />
      <SuccessAlert message="Success" />
      <ErrorAlert message="Something went wrong" />
    </div>
  );
}
