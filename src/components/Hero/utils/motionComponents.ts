import { motion } from 'framer-motion';
import { Box, VStack, Heading, Text, Button } from '@chakra-ui/react';

// Motion components for consistent usage across hero components
export const MotionBox = motion.create(Box);
export const MotionVStack = motion.create(VStack);
export const MotionHeading = motion.create(Heading);
export const MotionText = motion.create(Text);
export const MotionButton = motion.create(Button);