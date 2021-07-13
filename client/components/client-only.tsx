import React from "react";
import { useEffect, useState } from "react";

interface Props{
  children: React.ReactNode
}

const  ClientOnly:React.FC<Props> =({ children, ...delegated }) =>{
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <span {...delegated}>{children}</span>;
}


export default ClientOnly;