'use client';

import { IntelligenceAgentForm } from "@/components/intelligence-agent-form";
import { useDoc, useUser, useMemoFirebase } from "@/firebase";
import { doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoaderCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function IntelligenceAgentPage() {
    const { user, isUserLoading } = useUser();
    const router = useRouter();
    
    const userProfileRef = useMemoFirebase(() => {
        if (!user) return null;
        return doc(process.env.NEXT_PUBLIC_FIRESTORE_DB || '', 'users', user.uid);
    }, [user]);

    const { data: profile, isLoading: isProfileLoading } = useDoc(userProfileRef);

    useEffect(() => {
        if (!isUserLoading && !user) {
            router.push('/login');
        }
    }, [user, isUserLoading, router]);

    if (isUserLoading || isProfileLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <LoaderCircle className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    const hasProAccess = profile?.accessLevel === 'pro' || profile?.accessLevel === 'ltd';

    if (!hasProAccess) {
        return (
            <div className="space-y-8 max-w-2xl mx-auto py-12">
                <Card className="text-center p-8">
                    <CardHeader>
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Lock className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-headline">Premium Feature</CardTitle>
                        <CardDescription>
                            The Competitive Intelligence Agent is only available to Professional and Community members.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                            Upgrade your account to unlock deep, side-by-side website analysis and gain a strategic edge over your competitors.
                        </p>
                        <Button onClick={() => router.push('/pricing')} size="lg" className="w-full">
                            Upgrade to Pro
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold font-headline mb-2">Competitive Intelligence Agent</h1>
                <p className="text-muted-foreground">
                    Compare your website against a competitor. Our AI agent will perform a detailed analysis of both URLs and generate a comparative report.
                </p>
            </div>
            <IntelligenceAgentForm />
        </div>
    );
}