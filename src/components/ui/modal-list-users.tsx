"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const users = [
  { id: 1, name: "John Emily", role: "Student", status: "active" },
  { id: 2, name: "Mary David", role: "Professor", status: "inactive" },
  { id: 3, name: "Michael Ava", role: "Asistent", status: "away" },
  { id: 4, name: "William Olivia", role: "Student", status: "active" },
  { id: 5, name: "James Sarah", role: "Student", status: "inactive" },
  { id: 6, name: "Emily Michael", role: "Professor", status: "away" },
  { id: 7, name: "David John", role: "Asistent", status: "active" },
  { id: 8, name: "Ava William", role: "Student", status: "inactive" },
  { id: 9, name: "Sarah James", role: "Student", status: "away" },
  { id: 10, name: "Olivia Emily", role: "Professor", status: "active" },
  {
    id: 11,
    name: "Michael David",
    role: "Asistent",
    status: "inactive",
  },
  { id: 12, name: "John Ava", role: "Student", status: "away" },
  { id: 13, name: "Mary William", role: "Student", status: "active" },
  { id: 14, name: "James Olivia", role: "Professor", status: "inactive" },
  { id: 15, name: "Emily Sarah", role: "Asistent", status: "away" },
  { id: 16, name: "David Michael", role: "Student", status: "active" },
  { id: 17, name: "Ava James", role: "Student", status: "inactive" },
  { id: 18, name: "William Emily", role: "Professor", status: "away" },
];

export function ModalListUsers() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "inactive":
        return "bg-red-500";
      case "away":
        return "bg-gray-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Administrar</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[40vw] min-h-[80vh] ">
        <DialogHeader>
          <DialogTitle>Participantes del curso</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <Input
            placeholder="Filter by name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <ScrollArea className="h-[50vh] w-full rounded-md border p-4">
          <div className="  space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex  items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-3 h-3 rounded-full ${getStatusColor(
                      user.status
                    )}`}
                  />
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{user.role}</p>
                  </div>
                </div>
                <Badge variant="outline">{user.status}</Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
