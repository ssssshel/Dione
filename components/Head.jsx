import Head from "next/head";

export default function HeadLayout({section, desc}){

  return(
    <Head>
      <title>Dione | {section} </title>
      <meta name="description" content={desc} />
    </Head>
  )
}