import { Fragment, useState } from 'react'
import { Dialog, Transition, Tab } from '@headlessui/react'
import { ListForm } from './createForm'

interface ModalProps {
    createModal: boolean
    setCreateModal: (a: boolean) => void
}

const CreateModal = (props: ModalProps) => {
    // The open/closed state lives outside of the Dialog and is managed by you
    let [isOpen, setIsOpen] = useState(true)

    function handleJobPost() {
        // ...
    }

    return (
        <Transition appear show={props.createModal} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={() => props.setCreateModal(false)}
            >
                <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-70"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-70"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>
                    <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-80"
                        enterTo="opacity-100 scale-95"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-90"
                        leaveTo="opacity-0 scale-80"
                    >
                        <div className="inline-block font-light w-1/2 max-w-xl p-6 my-12 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
                            <Dialog.Title
                                as="h3"
                                className="text-2xl font-medium leading-6 text-gray-900 flex justify-center"
                            >
                                Start raising capital for your company today
                            </Dialog.Title>
                            {/* <div className="grid grid-cols-2 p-6"> */}
                            <ListForm />
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default CreateModal;