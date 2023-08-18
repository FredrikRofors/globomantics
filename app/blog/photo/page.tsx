import Image from "next/image";
import LoremIpsum from "./loremipsum";
import Surfer from './../../../public/images/summer.jpg';

export default function Page() {
    return (
        <>
            <LoremIpsum paragraphs={20} />
            <Image src={Surfer} alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        </>
    )
}