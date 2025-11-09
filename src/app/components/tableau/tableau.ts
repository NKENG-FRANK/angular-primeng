import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

interface Product {
  id: number;
  produit: string;
  quantite: number;
  prixUnitaire: number;
  total: number;
  date: string;
}

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService],
  template: `
    <p-toast />
    <p-confirmDialog />
    
    <div class="tableau-container">
      <style>
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>

      <!-- Header -->
      <div class="tableau-header">
        <div class="header-content">
          <div class="header-icon">
            <i class="pi pi-shopping-cart"></i>
          </div>
          <div>
            <h2>Product Entry Form</h2>
            <p>Add new products to your inventory</p>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="form-wrapper">
        <div class="input-form">
          <div class="form-grid">
            <div class="form-field">
              <p-floatlabel>
                <input 
                  pInputText 
                  id="produit" 
                  [(ngModel)]="produit"
                  class="form-input"
                />
                <label for="produit">Product Name</label>
              </p-floatlabel>
            </div>

            <div class="form-field">
              <p-floatlabel>
                <input 
                  pInputText 
                  id="quantite" 
                  [(ngModel)]="quantite"
                  type="number"
                  class="form-input"
                />
                <label for="quantite">Quantity</label>
              </p-floatlabel>
            </div>

            <div class="form-field">
              <p-floatlabel>
                <input 
                  pInputText 
                  id="prixUnitaire" 
                  [(ngModel)]="prixUnitaire"
                  type="number"
                  step="0.01"
                  class="form-input"
                />
                <label for="prixUnitaire">Unit Price (XAF)</label>
              </p-floatlabel>
            </div>
          </div>

          <div class="form-summary" *ngIf="produit || quantite || prixUnitaire">
            <div class="summary-card">
              <h3>Order Summary</h3>
              <div class="summary-items">
                <div class="summary-item" *ngIf="produit">
                  <span class="label">Product:</span>
                  <span class="value">{{ produit }}</span>
                </div>
                <div class="summary-item" *ngIf="quantite">
                  <span class="label">Quantity:</span>
                  <span class="value">{{ quantite }}</span>
                </div>
                <div class="summary-item" *ngIf="prixUnitaire">
                  <span class="label">Unit Price:</span>
                  <span class="value">{{ prixUnitaire | number:'1.2-2' }} XAF</span>
                </div>
                <div class="summary-divider" *ngIf="quantite && prixUnitaire"></div>
                <div class="summary-item total" *ngIf="quantite && prixUnitaire">
                  <span class="label">Total Amount:</span>
                  <span class="value">{{ getTotal() | number:'1.2-2' }} XAF</span>
                </div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <p-button 
              label="Reset"
              icon="pi pi-times"
              severity="secondary"
              [outlined]="true"
              (onClick)="onReset()"
            />
            
            <p-button 
              [label]="editingId ? 'Update' : 'Submit'"
              icon="pi pi-check"
              severity="success"
              (onClick)="onSubmit()"
              [disabled]="!isFormValid()"
            />
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="table-wrapper" *ngIf="products.length > 0">
        <div class="table-header">
          <h3>Product List</h3>
          <div class="table-actions">
            <p-iconfield iconPosition="left">
              <p-inputicon styleClass="pi pi-search" />
              <input 
                type="text"
                pInputText
                [(ngModel)]="searchTerm"
                placeholder="Search products..."
                class="search-input"
              />
            </p-iconfield>
            
            <p-button 
              label="Export"
              icon="pi pi-download"
              severity="secondary"
              (onClick)="exportToExcel()"
            />
          </div>
        </div>

        <p-table 
          [value]="filteredProducts()" 
          [paginator]="true" 
          [rows]="itemsPerPage"
          [showCurrentPageReport]="true"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          [rowsPerPageOptions]="[5, 10, 25, 50]"
          styleClass="p-datatable-striped"
          [tableStyle]="{'min-width': '50rem'}"
        >
          <ng-template pTemplate="header">
            <tr>
              <th pSortableColumn="produit">
                Product <p-sortIcon field="produit" />
              </th>
              <th pSortableColumn="quantite" style="text-align: center;">
                Quantity <p-sortIcon field="quantite" />
              </th>
              <th pSortableColumn="prixUnitaire" style="text-align: right;">
                Unit Price <p-sortIcon field="prixUnitaire" />
              </th>
              <th pSortableColumn="total" style="text-align: right;">
                Total <p-sortIcon field="total" />
              </th>
              <th pSortableColumn="date" style="text-align: center;">
                Date <p-sortIcon field="date" />
              </th>
              <th style="text-align: center;">Actions</th>
            </tr>
          </ng-template>
          
          <ng-template pTemplate="body" let-product>
            <tr>
              <td class="font-bold">{{ product.produit }}</td>
              <td style="text-align: center;">{{ product.quantite }}</td>
              <td style="text-align: right;">{{ product.prixUnitaire | number:'1.2-2' }} XAF</td>
              <td style="text-align: right;" class="font-bold">{{ product.total | number:'1.2-2' }} XAF</td>
              <td style="text-align: center;" class="text-sm">{{ product.date }}</td>
              <td style="text-align: center;">
                <div class="action-buttons">
                  <p-button 
                    icon="pi pi-pencil"
                    [rounded]="true"
                    [outlined]="true"
                    severity="info"
                    (onClick)="handleEdit(product)"
                    pTooltip="Edit"
                    tooltipPosition="top"
                  />
                  <p-button 
                    icon="pi pi-trash"
                    [rounded]="true"
                    [outlined]="true"
                    severity="danger"
                    (onClick)="confirmDelete(product.id)"
                    pTooltip="Delete"
                    tooltipPosition="top"
                  />
                </div>
              </td>
            </tr>
          </ng-template>
          
          <ng-template pTemplate="footer">
            <tr class="total-row">
              <td colspan="3"><strong>Grand Total</strong></td>
              <td colspan="3" style="text-align: right;"><strong>{{ grandTotal() | number:'1.2-2' }} XAF</strong></td>
            </tr>
          </ng-template>
          
          <ng-template pTemplate="emptymessage">
            <tr>
              <td colspan="6" style="text-align: center;">No products found.</td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </div>
  `,
  styles: `
    .tableau-container {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
      animation: fadeIn 0.5s ease-out;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .tableau-header {
      margin-bottom: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .header-icon {
      width: 70px;
      height: 70px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 2rem;
      color: white;
    }

    .tableau-header h2 {
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: white;
    }

    .tableau-header p {
      margin: 0;
      color: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
    }

    .form-wrapper {
      background: white;
      border-radius: 20px;
      padding: 2.5rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      margin-bottom: 2rem;
    }

    .input-form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .form-field {
      display: flex;
      flex-direction: column;
    }

    .form-input {
      width: 100%;
    }

    .form-summary {
      animation: slideDown 0.3s ease-out;
    }

    .summary-card {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      border-radius: 16px;
      padding: 1.5rem;
      border: 2px solid #e2e8f0;
    }

    .summary-card h3 {
      margin: 0 0 1rem 0;
      font-size: 1.25rem;
      font-weight: 700;
      color: #1a1a2e;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .summary-card h3::before {
      content: '';
      width: 4px;
      height: 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 2px;
    }

    .summary-items {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .summary-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
    }

    .summary-item .label {
      font-size: 0.938rem;
      color: #64748b;
      font-weight: 500;
    }

    .summary-item .value {
      font-size: 1rem;
      color: #2c2c77ff;
      font-weight: 600;
    }

    .summary-divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #cbd5e1, transparent);
      margin: 0.5rem 0;
    }

    .summary-item.total {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem;
      border-radius: 12px;
      margin-top: 0.5rem;
    }

    .summary-item.total .label,
    .summary-item.total .value {
      color: white;
      font-size: 1.125rem;
      font-weight: 700;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      padding-top: 1rem;
      border-top: 2px solid #f1f5f9;
    }

    .table-wrapper {
      background: white;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .table-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .table-header h3 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      color: #0505ccff;
    }

    .table-actions {
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .search-input {
      width: 250px;
    }

    .text-sm {
      font-size: 0.875rem;
    }

    .font-bold {
      font-weight: 700;
      color: #7474d4ff;
    }

    .action-buttons {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
    }

    .total-row {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-size: 1.125rem;
    }

    .total-row td {
      padding: 1rem;
      color: white !important;
    }

    ::ng-deep .p-datatable .p-datatable-thead > tr > th {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      color: #bbbbf8ff;
      font-weight: 700;
      border-bottom: 2px solid #e2e8f0;
    }

    ::ng-deep .p-datatable .p-datatable-tbody > tr {
      transition: background 0.2s;
    }

    ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {
      background: #f8fafc;
    }

    @media (max-width: 768px) {
      .tableau-container {
        padding: 1rem;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .table-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .table-actions {
        width: 100%;
        flex-direction: column;
      }

      .search-input {
        width: 100%;
      }
    }
  `
})
export class TableauComponent {
  produit = '';
  quantite: number | null = null;
  prixUnitaire: number | null = null;
  products: Product[] = [];
  editingId: number | null = null;
  searchTerm = '';
  itemsPerPage = 5;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  getTotal(): number {
    if (this.quantite && this.prixUnitaire) {
      return this.quantite * this.prixUnitaire;
    }
    return 0;
  }

  isFormValid(): boolean {
    return !!(this.produit && this.quantite && this.prixUnitaire);
  }

  onSubmit() {
    if (this.isFormValid()) {
      const newProduct: Product = {
        id: this.editingId || Date.now(),
        produit: this.produit,
        quantite: this.quantite!,
        prixUnitaire: this.prixUnitaire!,
        total: this.getTotal(),
        date: new Date().toLocaleDateString()
      };

      if (this.editingId) {
        const index = this.products.findIndex(p => p.id === this.editingId);
        if (index !== -1) {
          this.products[index] = newProduct;
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: 'Product updated successfully'
          });
        }
        this.editingId = null;
      } else {
        this.products.push(newProduct);
        this.messageService.add({
          severity: 'success',
          summary: 'Added',
          detail: 'Product added successfully'
        });
      }

      this.onReset();
    }
  }

  onReset() {
    this.produit = '';
    this.quantite = null;
    this.prixUnitaire = null;
    this.editingId = null;
  }

  handleEdit(product: Product) {
    this.produit = product.produit;
    this.quantite = product.quantite;
    this.prixUnitaire = product.prixUnitaire;
    this.editingId = product.id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this product?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.handleDelete(id);
      }
    });
  }

  handleDelete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.messageService.add({
      severity: 'info',
      summary: 'Deleted',
      detail: 'Product deleted successfully'
    });
  }

  filteredProducts(): Product[] {
    return this.products.filter(p =>
      p.produit.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  grandTotal(): number {
    return this.products.reduce((sum, p) => sum + p.total, 0);
  }

    exportToExcel() {
    // Create workbook and worksheet
    const worksheet: any = {};
    
    // Add headers
    const headers = ['Product', 'Quantity', 'Unit Price (XAF)', 'Total (XAF)', 'Date'];
    headers.forEach((header, index) => {
      const cellRef = this.getCellRef(0, index);
      worksheet[cellRef] = { v: header, t: 's' };
    });
    
    // Add data rows
    this.products.forEach((product, rowIndex) => {
      const row = rowIndex + 1;
      worksheet[this.getCellRef(row, 0)] = { v: product.produit, t: 's' };
      worksheet[this.getCellRef(row, 1)] = { v: product.quantite, t: 'n' };
      worksheet[this.getCellRef(row, 2)] = { v: product.prixUnitaire, t: 'n' };
      worksheet[this.getCellRef(row, 3)] = { v: product.total, t: 'n' };
      worksheet[this.getCellRef(row, 4)] = { v: product.date, t: 's' };
    });
    
    // Set worksheet range
    worksheet['!ref'] = `A1:E${this.products.length + 1}`;
    
    // Set column widths
    worksheet['!cols'] = [
      { wch: 20 }, // Product
      { wch: 10 }, // Quantity
      { wch: 15 }, // Unit Price
      { wch: 15 }, // Total
      { wch: 12 }  // Date
    ];
    
    // Create workbook
    const workbook = {
      Sheets: { 'Products': worksheet },
      SheetNames: ['Products']
    };
    
    // Generate Excel file
    const excelBuffer = this.writeExcel(workbook);
    const blob = new Blob([excelBuffer], { 
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
    });
    
    // Download file
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `products_${new Date().toISOString().split('T')[0]}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    this.messageService.add({
      severity: 'success',
      summary: 'Exported',
      detail: 'Products exported to Excel successfully'
    });
  }
  
  private getCellRef(row: number, col: number): string {
    const colLetter = String.fromCharCode(65 + col);
    return `${colLetter}${row + 1}`;
  }
  
  private writeExcel(workbook: any): ArrayBuffer {
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const range = sheet['!ref'].split(':');
    const start = { r: 0, c: 0 };
    const end = this.parseCell(range[1]);
    
    // Create CSV-like content
    let csv = '';
    for (let R = start.r; R <= end.r; R++) {
      let row = '';
      for (let C = start.c; C <= end.c; C++) {
        const cellRef = this.getCellRef(R, C);
        const cell = sheet[cellRef];
        if (cell) {
          row += (C > 0 ? ',' : '') + (cell.v || '');
        } else {
          row += C > 0 ? ',' : '';
        }
      }
      csv += row + '\n';
    }
    
    // Convert to ArrayBuffer (simplified Excel format)
    const buf = new ArrayBuffer(csv.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < csv.length; i++) {
      view[i] = csv.charCodeAt(i) & 0xFF;
    }
    return buf;
  }
  
  private parseCell(cell: string): { r: number, c: number } {
    const match = cell.match(/([A-Z]+)([0-9]+)/);
    if (!match) return { r: 0, c: 0 };
    const col = match[1].charCodeAt(0) - 65;
    const row = parseInt(match[2]) - 1;
    return { r: row, c: col };
  }
}