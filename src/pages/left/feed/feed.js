import PostList from "./newsFeed";
import { motion, useViewportScroll } from "framer-motion"

const Feed = () => {
  const { scrollYProgress } = useViewportScroll()
  console.log(scrollYProgress)
  return (
    <>
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
      <PostList />



    </>
  );
};

export default Feed;
