import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@workspace/ui/components/table';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Table> = {
  title: 'Molecules/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `
### Table Component (Molecule)

The \`Table\` component provides a structured way to display tabular data.

#### Atomic Design Classification:

- **Molecule**: Combines table elements (atoms) into a reusable component. `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Default table example
export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A sample table displaying user data.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>johndoe@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>janesmith@example.com</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Users: 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

// Table with striped rows
export const StripedRows: Story = {
  render: () => (
    <Table className="divide-y divide-gray-200">
      <TableCaption>Striped rows improve readability.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Item</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="bg-gray-100">
          <TableCell>1</TableCell>
          <TableCell>Apple</TableCell>
          <TableCell>$1.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Banana</TableCell>
          <TableCell>$0.50</TableCell>
        </TableRow>
        <TableRow className="bg-gray-100">
          <TableCell>3</TableCell>
          <TableCell>Cherry</TableCell>
          <TableCell>$2.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Table with selectable rows
export const SelectableRows: Story = {
  render: () => (
    <Table>
      <TableCaption>Click a row to select it.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Select</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="cursor-pointer hover:bg-gray-100" onClick={() => alert('Selected: Laptop')}>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>Laptop</TableCell>
          <TableCell>Available</TableCell>
        </TableRow>
        <TableRow className="cursor-pointer hover:bg-gray-100" onClick={() => alert('Selected: Phone')}>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Out of Stock</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Table with dynamic data
export const DynamicData: Story = {
  render: () => {
    const users = [
      { id: 1, name: 'Alice', role: 'Admin' },
      { id: 2, name: 'Bob', role: 'Editor' },
      { id: 3, name: 'Charlie', role: 'Viewer' },
    ];

    return (
      <Table>
        <TableCaption>User roles management.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// Accessibility test for tables
export const AccessibilityTest: Story = {
  render: () => (
    <Table aria-label="Accessible table example">
      <TableCaption>Screen reader-friendly table.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Notebook</TableCell>
          <TableCell>Office Supplies</TableCell>
          <TableCell>$5.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Desk Lamp</TableCell>
          <TableCell>Home & Decor</TableCell>
          <TableCell>$15.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
