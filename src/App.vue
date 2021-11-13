<template>
  <div id="app">
    <b-navbar class="px-3" toggleable="sm" type="dark" variant="primary">
      <b-navbar-brand href="/todos">Todo</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <b-link
              class="nav-link"
              to="/"
              active-class="fw-bold text-light"
              exact
              >Home</b-link
            >
          </b-nav-item>
          <b-nav-item>
            <b-link
              class="nav-link"
              to="/todos"
              active-class="fw-bold text-light"
              exact
              >Todos</b-link
            >
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container p-3">
      <router-view />
    </div>
  </div>
</template>
