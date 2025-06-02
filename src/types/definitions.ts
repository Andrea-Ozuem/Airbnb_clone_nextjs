/**
 * Represents a category item in the inspiration sections
 */
export interface CategoryItem {
  title: string;
  subtitle?: string;
}

/**
 * Represents a category in the inspiration data
 */
export interface Category {
  name: string;
  items: CategoryItem[];
  selected?: boolean;
}

/**
 * Represents the complete structure of the inspiration data
 */
export interface InspirationsData {
  categories: Category[];
}

/**
 * Props for the CategoryItemsSubMenu component
 */
export interface CategoryItemsSubMenuProps {
  items: CategoryItem[];
}