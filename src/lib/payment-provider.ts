/**
 * @fileOverview Centralized Lemon Squeezy Configuration Provider.
 * Use this file to manage your product and checkout URLs.
 */

export const LEMON_SQUEEZY_CONFIG = {
  /**
   * URLs for your Lemon Squeezy Checkouts.
   * These should be provided via environment variables for security and flexibility.
   */
  checkouts: {
    community: process.env.NEXT_PUBLIC_LEMONSQUEEZY_COMMUNITY_URL || '',
    pro: process.env.NEXT_PUBLIC_LEMONSQUEEZY_PRO_URL || '',
    ltd: process.env.NEXT_PUBLIC_LEMONSQUEEZY_LTD_URL || '',
  },
  /**
   * Product/Variant IDs if you need to reference them specifically in logic.
   */
  products: {
    communityId: process.env.NEXT_PUBLIC_LEMONSQUEEZY_COMMUNITY_PRODUCT_ID || '',
    proId: process.env.NEXT_PUBLIC_LEMONSQUEEZY_PRO_PRODUCT_ID || '',
    ltdId: process.env.NEXT_PUBLIC_LEMONSQUEEZY_LTD_PRODUCT_ID || '',
  }
};

/**
 * Helper to build a secure checkout URL with user context.
 * @param baseUrl The base Lemon Squeezy checkout URL.
 * @param user The current authenticated user.
 */
export function getLemonSqueezyCheckoutUrl(baseUrl: string, user: { email?: string | null; uid: string } | null) {
  if (!baseUrl) return '#';
  if (!user) return '/signup';

  const url = new URL(baseUrl);
  url.searchParams.set('checkout[email]', user.email || '');
  url.searchParams.set('checkout[custom][user_id]', user.uid);
  url.searchParams.set('embed', '1');
  return url.toString();
}
