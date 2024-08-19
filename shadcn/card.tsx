import {
    Card,
} from "@/components/ui/card"

export function CardWithForm({ children }: { children: React.ReactNode }) {
    return (
        <Card className="w-full" >
            {children}
        </Card>
    )
}
