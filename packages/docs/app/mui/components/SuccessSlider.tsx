'use client';

import Slider, { SliderProps } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

interface SuccessSliderProps extends SliderProps {
  successType: "main" | "light";
}

const SuccessSlider = styled(Slider)<SuccessSliderProps>(
  ({ theme, successType }) => ({
    color:
      successType === "main"
        ? theme.palette.success.main
        : theme.palette.success.light,
  })
);

export default SuccessSlider;
