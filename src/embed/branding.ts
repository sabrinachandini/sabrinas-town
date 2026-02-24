// MODEL: Claude Sonnet
// Branding application for embed widgets

import type { TownFullResponse } from '../validators/town.js';

export interface BrandingConfig {
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  ctaText?: string;
  ctaUrl?: string;
  footerText?: string;
  hideNetworkBadge?: boolean;
}

export interface BrandedTownData extends TownFullResponse {
  _branding: BrandingConfig | null;
}

/**
 * Apply organization branding to town data for embed
 */
export function applyBranding(
  town: TownFullResponse,
  brandingConfig: Record<string, unknown> | null
): BrandedTownData {
  const branding: BrandingConfig | null = brandingConfig
    ? {
        logoUrl: brandingConfig.logoUrl as string | undefined,
        primaryColor: brandingConfig.primaryColor as string | undefined,
        secondaryColor: brandingConfig.secondaryColor as string | undefined,
        ctaText: brandingConfig.ctaText as string | undefined,
        ctaUrl: brandingConfig.ctaUrl as string | undefined,
        footerText: brandingConfig.footerText as string | undefined,
        hideNetworkBadge: brandingConfig.hideNetworkBadge as boolean | undefined,
      }
    : null;

  return {
    ...town,
    _branding: branding,
  };
}

/**
 * Validate branding config
 */
export function validateBrandingConfig(config: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!config || typeof config !== 'object') {
    return { valid: true, errors: [] }; // Empty config is valid
  }

  const cfg = config as Record<string, unknown>;

  // Validate URL fields
  const urlFields = ['logoUrl', 'ctaUrl'];
  for (const field of urlFields) {
    if (cfg[field] && typeof cfg[field] === 'string') {
      try {
        new URL(cfg[field] as string);
      } catch {
        errors.push(`${field} must be a valid URL`);
      }
    }
  }

  // Validate color fields (hex colors)
  const colorFields = ['primaryColor', 'secondaryColor'];
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  for (const field of colorFields) {
    if (cfg[field] && typeof cfg[field] === 'string') {
      if (!hexColorRegex.test(cfg[field] as string)) {
        errors.push(`${field} must be a valid hex color (e.g., #FF5733)`);
      }
    }
  }

  // Validate text length
  if (cfg.ctaText && typeof cfg.ctaText === 'string' && (cfg.ctaText as string).length > 50) {
    errors.push('ctaText must be 50 characters or less');
  }

  if (cfg.footerText && typeof cfg.footerText === 'string' && (cfg.footerText as string).length > 200) {
    errors.push('footerText must be 200 characters or less');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Generate CSS variables from branding config
 */
export function generateBrandingCSS(config: BrandingConfig): string {
  const vars: string[] = [];

  if (config.primaryColor) {
    vars.push(`--st-primary-color: ${config.primaryColor}`);
  }

  if (config.secondaryColor) {
    vars.push(`--st-secondary-color: ${config.secondaryColor}`);
  }

  return vars.length > 0 ? `:root { ${vars.join('; ')}; }` : '';
}
