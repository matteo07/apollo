import Image from "next/image";

export const Loader = () => <div
    style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 32}}>
    <Image src="/hourglass-time.gif" width={72} height={72}/>
</div>