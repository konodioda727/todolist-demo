export type itemType = {
    value: string,
    key: number,
    isCompleted: boolean
}

export type displayState= 'all' | 'completed' | 'active'

export type handleFunctionTypes = 'handleAdd' | 'handleToggle' | 'handleDelete' | 'handleEdit' | 'handleToggleAll' | 'handleClearCompleted' | 'handleSetState'

export type listFunctionType = {
    [key in handleFunctionTypes] : (...args: any[]) => void
}
