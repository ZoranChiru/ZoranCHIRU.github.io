const ProjectCard = {
  props: ['projet'],
  template: `
    <div class="project-card fade-in">
      <div class="card-num">{{ projet.num }} — {{ projet.categorie }}</div>
      <span v-if="projet.wip" class="card-wip">En cours</span>
      <div class="card-title">{{ projet.titre }}</div>
      <div class="card-desc">{{ projet.desc }}</div>
      <div class="card-tags">
        <span
          v-for="tag in projet.tags"
          :key="tag.label"
          class="tag"
          :class="{ gold: tag.gold }"
        >
          {{ tag.label }}
        </span>
      </div>
    </div>
  `
}

export default ProjectCard