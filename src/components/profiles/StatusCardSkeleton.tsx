import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const StatusCardSkeleton = () => {
  return (
    <Card>
      <CardBody></CardBody>
      <Skeleton height="200px" />
    </Card>
  );
};

export default StatusCardSkeleton;
