import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import React from 'react'
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import SVGComponent from "./svg/edit"

type Props = {}

const AccountEdit = (props: Props) => {
    return (

        <Dialog>
            <DialogTrigger>
                <div className="rounded-md px-3 text-primary underline-offset-4 hover:underline">Edit</div>
            </DialogTrigger>
            <DialogContent>
                <Tabs defaultValue="account" className="w-full pt-4 ">
                    <TabsList className="mb-4">
                        <TabsTrigger value="Update">Edit</TabsTrigger>
                        <TabsTrigger value="Delete">Delete</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Update">
                        <DialogHeader>
                            <DialogTitle>Do you want to Edit the Account?</DialogTitle>
                            <DialogDescription>
                                <div className="flex flex-col gap-4 mt-6">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="account" >Account Name</Label>
                                        <Input id="account" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="Amount">Amount</Label>
                                        <Input id="Amount" type="number" />
                                    </div>
                                    <Button variant="default">Update</Button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </TabsContent>
                    <TabsContent value="Delete">
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will delete your Account
                               from our servers.
                            </DialogDescription>

                            <Button variant="default">Delete</Button>
                        </DialogHeader>
                    </TabsContent>
                </Tabs>

            </DialogContent>
        </Dialog>

    )
}

export default AccountEdit
