```javascript
<div class="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 text-white p-4 rounded-lg shadow-lg">
  <!-- Content -->
</div>
```
This improved code adds a `via` color to smooth the transition, improving cross-browser compatibility. For older browsers without full gradient support, consider adding a fallback using CSS's `background-image` property as a final solution.