interface Props {
 message: string;
}

const MessageItem = ({message}:Props) => {
    return (
        <div>{message}</div>
    );
}

export default MessageItem;