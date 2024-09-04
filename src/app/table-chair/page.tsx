import TableAndChairDescription from "@/components/TableAndChairDescription"
import useDocSize from "@/hooks/useDocSize"
import dynamic from "next/dynamic"

interface pageProps{
    
}

const TableAndChairCanvas=dynamic(()=>import('@/components/canvases/TableAndChair'),{ssr:false})

export default function page({}:pageProps ){

    return(
            <main className=" w-full min-h-screen bg-[#454545] flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 mb-[100vh] relative z-0">
                

                <div className=" w-full  h-[85vh] z-10">
                    {/* <TableAndChairCanvas/> */}
                </div>

                {/* <div className=" absolute left-5 -z-10">
                    <TableAndChairDescription/>
                </div> */}

            </main>
    )
}