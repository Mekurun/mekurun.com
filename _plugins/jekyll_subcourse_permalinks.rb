module Jekyll
  class PermalinkRewriter < Generator
    safe true
    priority :low

    def generate(site)
      site.posts.each do |item|
        @parent = item.data['parent']
        unless @parent.nil?
          item.data['permalink'] = "/:categories/#{@parent}/:title/"
        end
      end
    end
  end
end
