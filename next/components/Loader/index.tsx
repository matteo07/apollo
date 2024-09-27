import Image from "next/image";
import {wrapper} from "@components/Loader/styles";

export const Loader = () => <div style={wrapper}>
    <Image src="/wind.gif" width={120} height={75}/>
</div>