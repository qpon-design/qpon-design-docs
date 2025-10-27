---
title: Status & Error Messages
description: How Qpon communicates state, errors, and recovery paths
---

import Admonition from '@theme/Admonition';

<Admonition type="tip" title="Keep it human">
Use direct language and offer a next step.
</Admonition>

### Pattern: Payment Failure (Voucher)
**Do <span class="badge-do">DO</span>**
- Explain what happened
- Offer next action

**EN:** *Payment failed. Your voucher wasn’t issued. Try again or choose another method.*  
**ID:** *Pembayaran gagal. Voucher belum terbit. Coba lagi atau pilih metode lain.*  
**简体中文：** *付款失败。代金券尚未发放。请重试或更换支付方式。*

```jsx live
<div className="mock-card">
  <h4>Payment failed</h4>
  <p>Your voucher wasn’t issued. Try again or choose another method.</p>
  <button>Try again</button>
</div>
```
