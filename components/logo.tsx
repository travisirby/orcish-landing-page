import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/v-logo.png" // Path relative to the public directory
            alt="V Logo"
            width={28} // Corresponds to size-7 (7 * 4px = 28px)
            height={28} // Corresponds to size-7
            className={cn('size-7', className)} // Keep size consistency
        />
    )
}

// Removed LogoStroke component as it's likely not needed when using an image logo.
