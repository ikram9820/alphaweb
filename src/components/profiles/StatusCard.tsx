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
      <Heading fontSize="2xl">
        <Link to={"/statuses/" + status.id}>
          <ExpandableText>{status.description}</ExpandableText>
        </Link>
      </Heading>
      <CardBody>
        <Image src={status.file || NO_IMAGE} />
      </CardBody>
    </Card>
  );
};

export default StatusCard;
