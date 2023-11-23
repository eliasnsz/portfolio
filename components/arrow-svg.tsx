import { ComponentProps } from 'react'

type Props = ComponentProps<'svg'>

export function ArrowSvg({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 52 52"
    >
      <path
        d="M3101.127,2782.036a5.372,5.372,0,0,0-.305.478,16.094,16.094,0,0,1-12.182,8.968c-.509.092-.7-.018-.807-.511-.442-2.119-.909-4.233-1.387-6.438,8.833-.469,13.8-5.062,14.825-13.933,1.267,0,2.516-.006,3.765,0,.639,0,1.46-.2,1.864.119.378.3.333,1.154.441,1.771a14.027,14.027,0,0,0,4.876,8.787,13.854,13.854,0,0,0,6.914,2.944c.874.13,1.755.2,2.743.311-.239,1.128-.473,2.249-.714,3.367-.212.988-.46,1.968-.637,2.962-.092.514-.254.724-.822.619a16.01,16.01,0,0,1-12.267-9.167c-.041-.085-.1-.161-.242-.386-.042.377-.089.605-.089.833q.007,15.025.021,30.05c0,.991,0,.992-.972.992-1.381,0-2.764-.035-4.143.016-.645.023-.767-.208-.766-.8q.025-14.951.012-29.9v-1.034Z"
        transform="translate(-191.987 -4140.738) rotate(45)"
        className={className}
        stroke-width="0.05em"
      ></path>
    </svg>
  )
}
