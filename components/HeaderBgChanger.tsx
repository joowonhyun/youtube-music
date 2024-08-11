/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useUIState from "@/hooks/useUIState";
import React, { useEffect } from "react";

interface ImageSrcProps {
  imageSrc: string;
}

const HeaderBgChanger = ({ imageSrc }: ImageSrcProps) => {
  const { setHeaderImageSrc } = useUIState();

  useEffect(() => {
    if (imageSrc) setHeaderImageSrc(imageSrc);
  }, [imageSrc]);

  return <div></div>;
};

export default HeaderBgChanger;
