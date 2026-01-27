import Section from './Section';

interface StorySectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  alternate?: boolean;
}

const StorySection = ({ id, title, subtitle, children, alternate = false }: StorySectionProps) => {
  return (
    <Section id={id} alternate={alternate}>
      <div className="space-y-6">
        {subtitle && (
          <p className="text-sm font-medium text-primary uppercase tracking-wide">
            {subtitle}
          </p>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-sora leading-tight">
          {title}
        </h2>
        <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </Section>
  );
};

export default StorySection;
