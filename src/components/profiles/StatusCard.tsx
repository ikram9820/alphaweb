import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NO_IMAGE } from "../../constants";
import { Status } from "../../entities/Status";
import ExpandableText from "./ExpandableText";

interface Props {
  status: Status;
}

const StatusCard = ({ status }: Props) => {
  return (
    <Card>
      <CardBody>
        <Link to={"/statuses/" + status.id}>
          <Image src={`http://localhost:8000/${status.file}` || NO_IMAGE} />
        </Link>
      </CardBody>
    </Card>
  );
};

export default StatusCard;
