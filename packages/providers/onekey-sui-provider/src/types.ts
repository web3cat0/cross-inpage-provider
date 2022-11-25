export const ALL_PERMISSION_TYPES = ['viewAccount', 'suggestTransactions'] as const;
type AllPermissionsType = typeof ALL_PERMISSION_TYPES;

export type PermissionType = AllPermissionsType[number];

export const LOGO_BASE64 =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80NTkyMl84OCkiPgo8cGF0aCBkPSJNMTI3LjYxIDYzLjgwNDlDMTI3LjYxIDEwNy44NTMgMTA3Ljg1MyAxMjcuNjEgNjMuODA0OSAxMjcuNjFDMTkuNzU2OCAxMjcuNjEgMCAxMDcuODUzIDAgNjMuODA0OUMwIDE5Ljc1NjggMTkuNzU2OCAwIDYzLjgwNDkgMEMxMDcuODUzIDAgMTI3LjYxIDE5Ljc1NjggMTI3LjYxIDYzLjgwNDlaIiBmaWxsPSIjM0JEMjNEIi8+CjxwYXRoIGQ9Ik02OS41Njk5IDI3LjA1NTdMNTEuODE5NyAyNy4wNTU3TDQ4LjcwNTYgMzYuNDcxOUg1OC41NjQ1TDU4LjU2NDUgNTYuMzA2M0g2OS41Njk5VjI3LjA1NTdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg0LjA0ODYgODAuMzExMUM4NC4wNDg2IDkxLjQ5MTIgNzQuOTg1NCAxMDAuNTU0IDYzLjgwNTMgMTAwLjU1NEM1Mi42MjUzIDEwMC41NTQgNDMuNTYyMSA5MS40OTEyIDQzLjU2MjEgODAuMzExMUM0My41NjIxIDY5LjEzMTEgNTIuNjI1MyA2MC4wNjc4IDYzLjgwNTMgNjAuMDY3OEM3NC45ODU0IDYwLjA2NzggODQuMDQ4NiA2OS4xMzExIDg0LjA0ODYgODAuMzExMVpNNzQuODU4NCA4MC4zMTExQzc0Ljg1ODQgODYuNDE1NSA2OS45MDk3IDkxLjM2NDEgNjMuODA1MyA5MS4zNjQxQzU3LjcwMDggOTEuMzY0MSA1Mi43NTIyIDg2LjQxNTUgNTIuNzUyMiA4MC4zMTExQzUyLjc1MjIgNzQuMjA2NiA1Ny43MDA4IDY5LjI1OCA2My44MDUzIDY5LjI1OEM2OS45MDk3IDY5LjI1OCA3NC44NTg0IDc0LjIwNjYgNzQuODU4NCA4MC4zMTExWiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80NTkyMl84OCI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=';
