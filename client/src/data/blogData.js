import blog1 from '../assets/blogs/blog1.jpg';
import blog2 from '../assets/blogs/blog2.jpg';
import blog3 from '../assets/blogs/blog3.jpg';
import blog4 from '../assets/blogs/blog4.jpg';

const blogs = [
  {
    slug: 'psychology-of-color-graphic-design',
    title: 'The Psychology of Color in Graphic Design: How to Influence Emotions and Decisions',
    excerpt: 'Color isn’t just about making things look pretty—it’s a powerful tool that...',
    image: blog1,
    date: 'February 22, 2024',
    author: 'Lucy Kamau',
    content: `Color isn’t just about aesthetics; it’s a powerful psychological tool that designers use to influence perception and behavior. 
    In graphic design, colors can evoke specific emotions and drive decision-making. For instance, red can convey urgency and passion, 
    making it ideal for call-to-actions, while blue evokes trust and calmness—perfect for corporate brands.
    
    Designers who understand the psychology of color are better equipped to create compelling visuals that connect with users on 
    a deeper level. By choosing a color palette based on the target audience’s emotional triggers, designers can increase user 
    engagement and drive conversions. 

    For example, food brands often use red and yellow because they trigger hunger and excitement, while tech companies lean toward 
    blues and greys for a clean and trustworthy image. Always consider cultural meanings too—colors can have different symbolism 
    in different parts of the world.`
  },
  {
    slug: 'designing-user-friendly-interfaces',
    title: 'Designing User-Friendly Interfaces: Principles That Work',
    excerpt: 'Good design is invisible. It gets out of the way and lets users achieve their goals...',
    image: blog2,
    date: 'March 5, 2024',
    author: 'Sophia Njeri',
    content: `User-friendly interfaces are built on principles that prioritize clarity, consistency, and feedback. 
    Designers should aim to create intuitive experiences where users don’t need a manual to get things done. 
    Clear labels, familiar icons, and logical navigation are essential components. 
    
    Consistency in colors, typography, and layout builds user trust and reduces cognitive load. Feedback—like a spinner when 
    loading or a message after submitting a form—helps users feel in control. 
    
    Accessibility is another pillar of good interface design. Always consider users with disabilities by following WCAG 
    standards, like adding alt text for images and ensuring sufficient color contrast. The goal is always the same: 
    help users complete tasks easily and efficiently.`
  },
  {
    slug: 'future-of-ui-trends',
    title: 'The Future of UI: 2024 Trends and What They Mean for Designers',
    excerpt: 'UI design continues to evolve rapidly. 2024 brings exciting trends like glassmorphism, 3D elements, and more...',
    image: blog3,
    date: 'April 10, 2024',
    author: 'Brian Otieno',
    content: `In 2024, UI design is taking a bold leap forward. Designers are embracing trends like glassmorphism, 
    which uses frosted-glass effects to add depth and hierarchy. Coupled with vivid gradients and motion, 
    interfaces feel more dynamic and engaging. 
    
    Another major trend is 3D elements and microinteractions that provide tactile feedback and enhance user engagement. 
    Designers are also leaning into personalization, allowing users to customize layouts, themes, and even interaction modes. 
    
    Sustainability and dark mode are no longer optional—they're expectations. Energy-efficient color palettes and minimalist 
    interfaces not only look good but reduce screen strain and battery usage. If you're a designer, staying current 
    with these trends helps you deliver fresh, forward-thinking digital experiences.`
  },
  {
    slug: 'responsive-design-best-practices',
    title: 'Responsive Design Best Practices: Creating for Every Screen Size',
    excerpt: 'Users access websites on all kinds of devices. Learn how to design layouts that adapt beautifully...',
    image: blog4,
    date: 'May 12, 2024',
    author: 'Lilian Mwende',
    content: `Responsive design ensures your website looks and works well on all screen sizes—from smartphones to desktops. 
    Begin with a mobile-first approach, designing the smallest screen experience first, then scale up. Use flexible grids, 
    media queries, and scalable images to adapt to various devices. 
    
    Avoid fixed pixel sizes. Instead, use relative units like percentages or rem for widths and spacing. Test across devices 
    and browsers regularly to catch layout shifts or broken interactions. 
    
    Navigation is especially critical—on small screens, prioritize hamburger menus, collapsible sections, and sticky buttons. 
    With more people browsing on mobile than ever, mastering responsive design is a must for any modern web designer.`
  },
];

export default blogs;
