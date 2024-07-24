import { ethers } from 'ethers';
import {useState} from "react";
import {toast} from "react-toastify";
import Toast from "../Toast/Toast.tsx";
import Creator from "../Creator/Creator.tsx";

const AddressesNormalizer = () => {
    const [input, setInput] = useState("")
    const [normalizedAddresses, setNormalizedAddresses] = useState("");

    const OnClickNormalize = () => {
        const addresses = input.split('\n')
        const normalizedAddresses = []
        try {
            for (const address of addresses) {
                if (address === "") {
                    continue
                }
                if (!ethers.isAddress(address)) {
                    throw new Error(`address "${address}" has incorrect format. Please enter only EVM addresses`)
                } else {
                    normalizedAddresses.push(ethers.getAddress(address))
                }
            }

            setNormalizedAddresses(normalizedAddresses.join("\n"))
        } catch (e) {
            toast(<Toast text={String(e)}/>)
        }

    }

    const OnClickCopy = () => {
        navigator.clipboard.writeText(normalizedAddresses)
        toast.success('Copied to clipboard')
    }

    return (
        <div className='flex flex-row fadeIn'>
            <div className="flex flex-col justify-center items-center pt-14 flex-grow ml-auto">
                <h1 className="text-4xl font-bold">EVM Addresses Normalizer</h1>
                <h2 className="text-2xl font-bold mt-7">Wallet addresses</h2>
                <p>(Be careful to enter only addresses, not private phrases or keys)</p>
                <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Your wallet addresses"
                          className="textarea textarea-bordered textarea-md h-56 mt-3 resize-none checker-textarea"
                          style={{width: "500px"}}/>
                <button className="btn btn-primary mt-3 w-56" onClick={OnClickNormalize}>Normalize</button>
                <Creator/>
                {normalizedAddresses.length > 0 &&
                    <div className="flex flex-col justify-center items-center fadeIn">
                        <button className="btn btn-neutral mt-3 w-56" onClick={OnClickCopy}>Copy Normalized Addresses
                        </button>
                        <textarea value={normalizedAddresses} disabled={true}
                                  className="textarea textarea-bordered textarea-md h-72 mt-3 resize-none checker-textarea"
                                  style={{width: "500px"}}/>
                    </div>
                }
            </div>
        </div>
    )

}

export default AddressesNormalizer