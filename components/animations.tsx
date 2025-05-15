"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({ children, direction = "up", delay = 0, duration = 2, className = "" }: FadeInProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { y: 30, opacity: 0 }
      case "down":
        return { y: -30, opacity: 0 }
      case "left":
        return { x: 30, opacity: 0 }
      case "right":
        return { x: -30, opacity: 0 }
      case "none":
        return { opacity: 0 }
      default:
        return { y: 30, opacity: 0 }
    }
  }

  const variants = {
    hidden: getDirectionValues(),
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

export function StaggeredFadeIn({ children, staggerDelay = 0.1, containerClassName = "", itemClassName = "" }: { children: ReactNode; staggerDelay?: number; containerClassName?: string; itemClassName?: string }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={containerClassName}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants} className={itemClassName}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}

export function ParallaxScroll({ children, speed = 0.5, className = "" }: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrollY = window.scrollY
      const element = ref.current as HTMLElement
      element.style.transform = `translateY(${scrollY * speed}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
