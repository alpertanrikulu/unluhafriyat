"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/Map"), {
  ssr: false, // SSR'yi devre dışı bırakıyoruz çünkü iframe sadece istemci tarafında çalışmalı
});

const GoogleMap = () => <MapComponent />;

export default GoogleMap;
