'use client'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

export function HeroPattern() {
  const { scrollY } = useScroll()
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(scrollY.get()))

    return () => {
      window.removeEventListener('scroll', () => setScroll(scrollY.get()))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <motion.svg
      animate={{
        rotate: scroll / 20,
        transition: { duration: 1, ease: 'easeOut' },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="1145.638"
      height="1133.39"
      viewBox="0 0 1145.638 1133.39"
      className="absolute w-full min-w-[600px] pointer-events-none -z-20 opacity-[11%] -top-[19rem]"
    >
      <g fill="none">
        <path
          strokeWidth={10}
          d="M572.819,0l1.341,569.629L840.976,65.868l-264.442,505L1047.7,248.384,578.057,573.07l567.58-67.335L578.381,575.723,872.715,687.755l239.633,91.211L577.43,578.222l378.028,427.259L575.423,579.994l135.488,553.4L572.819,580.633,434.728,1133.39l135.488-553.4L190.18,1005.481,568.208,578.222,33.29,778.965,567.257,575.723,0,505.735,567.58,573.07,97.936,248.384,569.1,570.871l-264.442-505,266.816,503.76Z"
          stroke="none"
        />
        <path
          d="M 572.81884765625 -0.0001220703125 L 574.1597290039062 569.628662109375 L 840.976318359375 65.868408203125 L 576.5341186523438 570.8706665039062 L 1047.701904296875 248.38427734375 L 578.057373046875 573.070068359375 L 1145.637817382812 505.7351684570312 L 578.3806762695312 575.7230224609375 L 872.71484375 687.754638671875 L 1112.347778320312 778.96533203125 L 577.4297485351562 578.2217407226562 L 955.4581298828125 1005.480834960938 L 575.4224853515625 579.9937133789062 L 710.9105224609375 1133.389892578125 L 572.81884765625 580.6333618164062 L 434.7276000976562 1133.389892578125 L 570.2152099609375 579.9937133789062 L 190.1797485351562 1005.481018066406 L 568.2081298828125 578.2217407226562 L 33.2899169921875 778.96533203125 L 567.2572021484375 575.7230224609375 L -0.0001220703125 505.7351684570312 L 567.5805053710938 573.070068359375 L 97.9359130859375 248.3840942382812 L 569.103759765625 570.8706665039062 L 304.6619262695312 65.8682861328125 L 571.4781494140625 569.628662109375 L 572.81884765625 -0.0001220703125 Z"
          stroke="none"
          fill="#c9bfa4"
        />
      </g>
    </motion.svg>
  )
}
