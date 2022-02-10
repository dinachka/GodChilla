import useChat from '../../useChat';

export default ({ children }) => {
  useChat();
  return children;
};
