import { BiErrorCircle } from "react-icons/bi";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import { Icons } from "./icons";

const ErrorAlert = ({
  message = "Something went wrong",
}: {
  message?: string;
}) => {
  return (
    <Alert variant="destructive">
      <BiErrorCircle className="h-4 w-4" />
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

const InfoAlert = ({ message = "Info" }: { message?: string }) => {
  return (
    <Alert className="text-blue-500 border-blue-500">
      <AiOutlineInfoCircle className="h-4 w-4 !text-blue-500" />
      <AlertTitle>Info!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

const WarnAlert = ({
  message = "You have been warned!",
}: {
  message?: string;
}) => {
  return (
    <Alert className="text-yellow-500 border-yellow-500">
      <AiOutlineWarning className="h-4 w-4 !text-yellow-500" />
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

const SuccessAlert = ({ message = "Success" }: { message: string }) => {
  return (
    <Alert className="text-green-600 border-green-600">
      <AiOutlineCheckCircle className="h-4 w-4 !text-green-600" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

const LoadingAlert = () => {
  return (
    <Alert className="flex items-center">
      <Icons.spinner className="h-4 w-4 animate-spin" />
      <AlertTitle>Loading</AlertTitle>
    </Alert>
  );
};

export { ErrorAlert, InfoAlert, WarnAlert, SuccessAlert, LoadingAlert };
