<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <nav>Navigation</nav>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>