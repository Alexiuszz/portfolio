import { motion } from "framer-motion";
import styled from "styled-components";

export default styled(motion.a)`
  border: 8px solid;
  border-image: repeating-linear-gradient(
      135deg,
      #f8ca00 0 10px,
      #e97f02 0 20px,
      #0f8a5f 0 30px
    )
    8;
    width: fit-content;
  -webkit-mask: conic-gradient(
        from 180deg at top 8px right 8px,
        #0000 90deg,
        #000 0
      )
      var(--_i, 200%) 0 /200% var(--_i, 8px) border-box no-repeat,
    conic-gradient(at bottom 8px left 8px, #0000 90deg, #000 0) 0
      var(--_i, 200%) / var(--_i, 8px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: 0.3s, -webkit-mask-position 0.3s 0.3s;

  &:hover {
    --_i: 100%;
    color: #cc333f;
    transition: 0.3s, -webkit-mask-size 0.3s 0.3s;
  }
`;
