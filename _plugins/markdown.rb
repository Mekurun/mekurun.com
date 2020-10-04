class Kramdown::Converter::Html
  def convert_img(el, _indent)
    "<img data-src='#{Jekyll.sites.first.config["url"]}#{el.attr["src"]}' alt='#{el.attr["alt"]}' loading='lazy' />"
  end
  def convert_a(el, indent)
    "<a href='#{el.attr["href"]}' target='_blank' rel='nofollow noopener'>#{inner(el, indent)}</a>"
  end
end

class Jekyll::Converters::Markdown::MekurunCustomConverter
  def initialize(config)
    require 'kramdown'
    @config = config
  rescue LoadError
    STDERR.puts 'You are missing a library required for Markdown. Please run:'
    STDERR.puts '  $ [sudo] gem install kramdown'
    raise FatalException.new("Missing dependency: kramdown")
  end

  def convert(content)
    Kramdown::Document.new(content).to_html
  end
end
